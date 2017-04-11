import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class ButtonDefault extends Component {
    constructor(props){
        super(props);
        this.state = {
            reset: this.props.reset
        };
        this.reset = this.reset.bind(this);
    }

    reset(){
        if(this.state.reset) {
            document.querySelectorAll("input").forEach(element => {
                element.value = ""
            });
        }
        return false;
    }

    render(){
        return(
            <RaisedButton  label={this.props.text} onClick={this.reset} />
        )
    }

}



