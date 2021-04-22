import React, { Component } from "react";
// import  Auth  from '../auth'
export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            token:''
        }
        this.handleEmail=this.handleEmail.bind(this)
        this.handlePassword=this.handlePassword.bind(this)
    }
    handleEmail(text){
        this.setState({email: text.target.value})
    }
    handlePassword(text){
        this.setState({password: text.target.value})
    }
    login(){
        let obj = {}
        obj.email = this.state.email
        obj.password = this.state.password
        fetch('http://127.0.0.1:8000/v1/auth/login/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(obj)
        }).then((result)=>{
            result.json().then((res)=>{
                if(result.status==200){
                    localStorage.setItem('auth', JSON.stringify(res.data.auth_token))
                    alert(localStorage.getItem('auth'))
                }
                console.log(res)
            })
        })
    }
    render() {
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form>
                <h3>Log In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(text)=>{this.handleEmail(text)}} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(text)=>{this.handlePassword(text)}}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.login()}}>Login</button>
            </form>
            </div>
            </div>
        );
    }
}
