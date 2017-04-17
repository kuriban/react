import React, { Component } from 'react';

import SubmitForm from './SubmitForm';
import RegisterForm from './RegisterForm';


export default class Index extends Component {
    render(){
        return(
            <div style={{float:'left',width:100+'%',textAlign:'center'}}>
                <h1>Мой первый реакт проект</h1>
                <div style={{position:'relative',float:'left',width:45+'%',textAlign:'right'}}>
                    <SubmitForm />
                </div>
                <div style={{position:'relative',float:'left',width:45+'%',textAlign:'left',marginLeft:20}}>
                    <RegisterForm />
                </div>
            </div>
        )
    }
}