import React, { PureComponent } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

import {Router, Route, IndexRoute, browserHistory } from 'react-router';

const styles = {
    errorStyle: {
        color: orange500,
    },
    underlineStyle: {
        borderColor: orange500,
    },
    floatingLabelStyle: {
        color: orange500,
    },
    floatingLabelFocusStyle: {
        color: blue500,
    },
};

export class SubmitForm extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            login:'',
            password:'',
            message: '',
            errorLogin: 1
        };
        this.reset = this.reset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkData = this.checkData.bind(this);
        this.getState = this.getState.bind(this);

    }
    getState(){
        return this.state.errorLogin
    }
    reset(){
        this.setState({
            login:'',
            password:''
        })
    }
    checkData(data){
        let user = {
                login : '1',
                password: '1'
            };
        if(data.login == user.login && data.password == user.password){
            this.setState({
                message:'Данные верны',
                errorLogin:0
            });
        }else{
            this.setState({
                message:'Такого пользователя не существует',
                errorLogin: 1
            });
        }
        // fetch("/data.json",{
        //     credentials:'same-origin',
        //     method:'post',
        //     mode: 'cors',
        // }).then(response=>{
        //     if(response.status>=200 && response.status<300){
        //         return response.json();
        //     }else{
        //         console.log(response);
        //     }
        // }).then(json=>{
        //     console.log(json);
        // }).catch(e=>{
        //     alert(e);
        // })

    }

    handleSubmit(event){
        event.preventDefault();
        let login = this.state.login,
            password = this.state.password,
            data = {login:login,password:password};
        this.checkData(data);

    }
    render(){

        return(
            <MuiThemeProvider>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <TextField
                            name="logon"
                            floatingLabelText="Login"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            value={this.state.login}
                            hintText="Login"
                            required
                            onChange={(event)=>{
                                this.setState({
                                   login: event.target.value
                                })
                            }}
                        />
                        <br />
                        <TextField
                            name="password"
                            floatingLabelText="Password"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            value={this.state.password}
                            hintText="Password"
                            required
                            type="password"
                            onChange={(event)=>{
                                this.setState({
                                    password: event.target.value
                                })
                            }}
                        />
                        <br />
                        <RaisedButton  type="submit" label="Submit" />
                        <RaisedButton  label="Reset"  onClick={this.reset} /><br/>
                        <div>{this.state.message}</div>
                        {setTimeout(() => {
                            if(!this.state.errorLogin){
                                browserHistory.push(`/cabinet`);
                            }
                        },2000)
                        }

                    </div>
                </form>
            </MuiThemeProvider>
        )
    }
}

