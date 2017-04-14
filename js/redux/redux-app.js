import React from 'react';
import {createStore} from 'redux';

const RESET = 'RESET';
const SUBMIT = 'SUBMIT';

const Store = (state = [], action)=> {
    if(action.type == "reset"){
        return [
            ...state,
            action.login = '',
            action.password=''
        ]
    }
};
export default Store;
