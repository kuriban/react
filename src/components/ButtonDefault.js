import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class ButtonDefault extends Component {
    constructor(props){
        super(props);
        this.reset = this.reset.bind(this);
        this.submit = this.submit.bind(this);

        this.state = {
            action: this.props.action == "reset" ? this.reset : this.submit
        };
    }

    submit(){

    }

    reset(){
        document.querySelectorAll("input").forEach(element => {element.value = ""});
        return false;
    }

    render(){
        return(
            <RaisedButton  label={this.props.text} onClick={this.state.action} />
        )
    }

}