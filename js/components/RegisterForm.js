import React, { PureComponent } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class SubmitForm extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            name        :'',
            lastname    :'',
            city        :'',
            password    :'',
            password2   :'',
        };
        this.reset = this.reset.bind(this);
        this.changeState = this.changeState.bind(this);

    }

    reset(){
        this.setState({
            name        :'',
            lastname    :'',
            city        :'',
            password    :'',
            password2   :'',
        })
    }
    changeState(name, value){
        this.setState({
            [name]: value
        });
    }
    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <InputField name="name" field={this.state.name} onChange={this.changeState} hint="First name"  />
                    <br />
                    <InputField name="lastname" field={this.state.lastname} onChange={this.changeState} hint="Last name"  />
                    <br />
                    <InputField name="city" field={this.state.city} onChange={this.changeState} hint="City"  />
                    <br />
                    <InputField name="password" field={this.state.password} onChange={this.changeState} hint="Password"  />
                    <br />
                    <InputField name="password2" field={this.state.password2} onChange={this.changeState} hint="Repeat password"  />
                    <br />


                    <RaisedButton  label="Register"   onClick={this.submit}/>
                    <RaisedButton  label="Reset"      onClick={this.reset} />
                </div>
            </MuiThemeProvider>
        )
    }
}

class InputField extends PureComponent {
    constructor(props){
        super(props);
    };
    render(){
        let name = this.props.name;
        return(
            <TextField
                value={this.props.field}
                hintText={this.props.hint}
                onChange={(event)=>{
                    this.props.onChange(name, event.target.value)
                }}
            />
        )
    }
}