import React, { Component } from "react";

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            item: []
        }
    }
    getProfile(){
        let tokenType = "Bearer ";
        let token = JSON.parse(localStorage.getItem('auth'));
        fetch('http://127.0.0.1:8000/v1/me/profile/',{
            method:'GET',
            headers:{
                "Authorization" : tokenType+token,
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
        }).then((result)=>{
            result.json().then((res)=>{
                if(result.status==200){
                   this.setState({item:res.data})
                }
            })
        })
    }
    render() {
        const { first_name, last_name, mobile_number } = this.state.item
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
                <p>{first_name}</p>
                <p>{last_name}</p>
                <p>{mobile_number}</p>
                <button onClick={()=>{this.getProfile()}}>get detail</button>
            </div>
            </div>
        );
    }
}
