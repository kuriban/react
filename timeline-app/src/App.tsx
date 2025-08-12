import './App.css'
import Timeline, { type TimelineGroup, type TimelineItemInput as TimelineItem } from './components/Timeline'

function App() {
  const groups: TimelineGroup[] = [
    { id: 1, content: 'RECON 1 - B3' },
    { id: 2, content: 'RECON 2 - B3' },
    { id: 3, content: 'STRIKE 1 - BOUNTY HUNTER' },
    { id: 4, content: 'STRIKE 2 - BOUNTY HUNTER' },
  ]

  const now = new Date()
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

  const items: TimelineItem[] = [
    { id: 'a', group: 1, start: new Date(today.getTime() + 14 * 60 * 60 * 1000), end: new Date(today.getTime() + 17.5 * 60 * 60 * 1000), className: 'status-red', title: 'Alert' },
    { id: 'b', group: 2, start: new Date(today.getTime() + 16 * 60 * 60 * 1000), end: new Date(today.getTime() + 19 * 60 * 60 * 1000), className: 'status-red', title: 'Recon' },
    { id: 'c', group: 3, start: new Date(today.getTime() + 16.5 * 60 * 60 * 1000), end: new Date(today.getTime() + 17 * 60 * 60 * 1000), className: 'status-green', title: 'Strike 1' },
    { id: 'd', group: 4, start: new Date(today.getTime() + 18 * 60 * 60 * 1000), end: new Date(today.getTime() + 18.5 * 60 * 60 * 1000), className: 'status-green', title: 'Strike 2' },
  ]

  return (
    <div style={{ padding: 16 }}>
      <h2>Mission Timeline</h2>
      <Timeline
        groups={groups}
        items={items}
        height={340}
        options={{
          editable: {
            add: false,
            updateTime: true,
            updateGroup: true,
            remove: false,
          },
          margin: { item: { horizontal: 0, vertical: 6 } },
          zoomMin: 60 * 1000,
          zoomMax: 14 * 24 * 60 * 60 * 1000,
          start: new Date(today.getTime() - 3 * 60 * 60 * 1000),
          end: new Date(today.getTime() + 24 * 60 * 60 * 1000),
          timeAxis: { scale: 'hour', step: 1 },
        }}
      />
    </div>
  )
}

export default App
