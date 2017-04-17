import React, { Component } from 'react'

export default class LoginStatus extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: 0
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount(){
        let file = "/data.json";
    }
    render(){
        console.log(this.props);
        let status = this.state.login;
        if(status) {
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