import React, { Component } from "react";

export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            full_name:'',
            mobileNumber:'',
            email:'',
            password:'',
            address:'',
            role:'',
        }
        this.handleEmail=this.handleEmail.bind(this)
        this.handleAddress=this.handleAddress.bind(this)
        this.handleMobileNumber=this.handleMobileNumber.bind(this)
        this.handleFullName=this.handleFullName.bind(this)
        this.handlePassword=this.handlePassword.bind(this)
    }
    handleFullName(text){
        this.setState({full_name: text.target.value})
    }
    handleMobileNumber(text){
        this.setState({mobileNumber: text.target.value})
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
    handleChange = e => {
        const { name, value } = e.target;
    
        this.setState({
          [name]: value
        });
    }
    signUp(){
        let obj = {}
        obj.full_name = this.state.full_name
        obj.mobileNumber = this.state.mobileNumber
        obj.email = this.state.email
        obj.password = this.state.password
        obj.role = this.state.role
        obj.address = this.state.address
        fetch('http://127.0.0.1:8000/v1/signup',{
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
                    <label>Full name</label>
                    <input type="text" className="form-control" placeholder="Full Name" onChange={(text)=>{this.handleFullName(text)}} />
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
                <div className="radio-buttons">
                Customer
                <input 
                id="customer"
                value="customer"
                name="role"
                type="radio"
                onChange={this.handleChange}
                />
                <br></br>
                Banker
                <input
                id="banker"
                value="banker"
                name="role"
                type="radio"
                onChange={this.handleChange}
                />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.signUp()}} >Sign Up</button>
            </form>
            </div>
            </div>
        );
    }
}