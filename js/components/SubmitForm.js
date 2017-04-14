import React, { PureComponent } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import { Link } from 'react-router';


export default class SubmitForm extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            login:'',
            password:''
        };
        this.reset = this.reset.bind(this);

    }
    submit(){

    }
    reset(){
        this.setState({
            login:'',
            password:''
        })
    }
    render(){
        return(
            <MuiThemeProvider>
                <div>
                    <TextField
                        value={this.state.login}
                        hintText="Login"
                        onChange={(event)=>{
                            this.setState({
                               login: event.target.value
                            })
                        }}
                    />
                    <br />
                    <TextField
                        value={this.state.password}
                        hintText="Password"
                        onChange={(event)=>{
                            this.setState({
                                password: event.target.value
                            })
                        }}
                    />
                    <br />
                    <RaisedButton  label="Submit" />
                    <RaisedButton  label="Reset"  onClick={this.reset} /><br/>
                    <Link to="/register">
                        <RaisedButton  label="Register"  />
                    </Link>
                </div>
            </MuiThemeProvider>
        )
    }
}

