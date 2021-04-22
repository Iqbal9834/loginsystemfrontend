import React, { Component } from "react";

export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            first_name:'',
            mobile_number:'',
            email:'',
            password:'',
            address:'',
        }
        this.handleEmail=this.handleEmail.bind(this)
        this.handleAddress=this.handleAddress.bind(this)
        this.handleMobileNumber=this.handleMobileNumber.bind(this)
        this.handleFirstName=this.handleFirstName.bind(this)
        this.handleLastName=this.handleLastName.bind(this)
        this.handlePassword=this.handlePassword.bind(this)
    }
    handleFirstName(text){
        this.setState({first_name: text.target.value})
    }
    handleLastName(text){
        this.setState({last_name: text.target.value})
    }
    handleMobileNumber(text){
        this.setState({mobile_number: text.target.value})
    }
    handleAddress(text){
        this.setState({address: text.target.value})
    }
    handleEmail(text){
        this.setState({email: text.target.value})
    }
    handlePassword(text){
        this.setState({password: text.target.value})
    }
   
    signUp(){
        let obj = {}
        obj.first_name = this.state.first_name
        obj.last_name = this.state.last_name
        obj.mobile_number = this.state.mobile_number
        obj.email = this.state.email
        obj.password = this.state.password
        obj.address = this.state.address
        fetch('http://127.0.0.1:8000/v1/auth/signup/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(obj)
        }).then((result)=>{
            result.json().then((res)=>{
                console.log(res)
            })
        })
    }
    render() {
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="first Name" onChange={(text)=>{this.handleFirstName(text)}} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="last Name" onChange={(text)=>{this.handleLastName(text)}} />
                </div>

                <div className="form-group">
                    <label>Mobile Number</label>
                    <input type="text" className="form-control" placeholder="Mobile Number" onChange={(text)=>{this.handleMobileNumber(text)}}
                    />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Address" onChange={(text)=>{this.handleAddress(text)}}
                    />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(text)=>{this.handleEmail(text)}}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(text)=>{this.handlePassword(text)}}/>
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.signUp()}} >Sign Up</button>
            </form>
            </div>
            </div>
        );
    }
}