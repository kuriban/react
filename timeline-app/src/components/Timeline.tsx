import { useEffect, useRef } from 'react';
import { DataSet } from 'vis-data';
import { Timeline, Timeline as TimelineClass } from 'vis-timeline/standalone';
import type { TimelineOptions } from 'vis-timeline';
import 'vis-timeline/styles/vis-timeline-graph2d.min.css';

export type TimelineGroup = {
  id: string | number;
  content: string;
};

export type TimelineItemInput = {
  id: string | number;
  group: string | number;
  start: Date | string | number;
  end?: Date | string | number;
  className?: string;
  title?: string;
  content?: string;
};

export type ReactTimelineProps = {
  groups: TimelineGroup[];
  items: TimelineItemInput[];
  options?: TimelineOptions;
  onMove?: (item: TimelineItemInput) => void;
  onRangeChanged?: (start: Date, end: Date) => void;
  className?: string;
  height?: string | number;
};

export default function ReactTimeline({
  groups,
  items,
  options,
  onMove,
  onRangeChanged,
  className,
  height = 300,
}: ReactTimelineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<TimelineClass | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const mappedItems = items.map((it) => ({ content: '', ...it }));

    const timeline = new Timeline(
      containerRef.current,
      new DataSet<any>(mappedItems),
      new DataSet<any>(groups),
      {
        stack: false,
        horizontalScroll: true,
        zoomKey: 'ctrlKey',
        orientation: 'top',
        ...options,
      }
    );

    timelineRef.current = timeline;

    const onRange = (props: any) => {
      if (onRangeChanged) onRangeChanged(props.start, props.end);
    };

    const onItemMove = (item: any, callback: any) => {
      if (onMove) onMove(item as TimelineItemInput);
      callback(item);
    };

    timeline.on('rangechanged', onRange);
    (timeline as any).on('move', onItemMove);

    return () => {
      timeline.off('rangechanged', onRange);
      (timeline as any).off('move', onItemMove);
      timeline.destroy();
    };
  }, []);

  useEffect(() => {
    if (!timelineRef.current) return;
    const mappedItems = items.map((it) => ({ content: '', ...it }));
    timelineRef.current.setGroups(new DataSet<any>(groups));
    timelineRef.current.setItems(new DataSet<any>(mappedItems));
  }, [groups, items]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
    />
  );
}