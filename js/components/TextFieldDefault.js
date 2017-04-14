import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class TextFieldDefault extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <TextField  hintText={this.props.text} />
        )
    }


}


