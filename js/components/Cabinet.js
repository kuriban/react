import React, { Component } from 'react';
import { SubmitForm } from './SubmitForm';

export default class Cabinet extends SubmitForm {
    constructor(props){
        super(props);
        this.state = {
            errorLogin: this.getState()
        }
    }
    render(){
        let status = this.state.errorLogin;
        console.log(status);
        if(!status) {
            return (
                <div>Вы зарегистрованный пользователь</div>
            )
        }else{
            return (
                <div>Вы не зареристрованный пользователь</div>
            )
        }
    }
}