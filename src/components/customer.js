import React, { Component } from "react";
// import  Auth  from '../auth'
export default class Customer extends Component {
    constructor(props){
        super(props)
        this.state = {
            customerName:'',
            customerEmail:'',
            customerPhone:'',
            customerStreet:'',
            customerCity:''
        }
        this.handleCustomerName=this.handleCustomerName.bind(this)
        this.handleEmail=this.handleEmail.bind(this)
        this.handlePhoneNumber=this.handlePhoneNumber.bind(this)
        this.handleCity=this.handleCity.bind(this)
        this.handleStreet=this.handleCity.bind(this)
    }
    handleCustomerName(text){
        this.setState({customerName: text.target.value})
    }
    handleEmail(text){
        this.setState({customerEmail: text.target.value})
    }
    handlePhoneNumber(text){
        this.setState({customerPhone: text.target.value})
    }
    handleStreet(text){
        this.setState({customerStreet: text.target.value})
    }
    handleCity(text){
        this.setState({customerCity: text.target.value})
    }
    createCustomer(){
        let obj = {}
        obj.customerName = this.state.customerName
        obj.customerEmail = this.state.customerEmail
        obj.customerPhone = this.state.customerPhone
        obj.customerCity = this.state.customerCity
        obj.customerStreet = this.state.customerStreet
        let tokenType = "Bearer "
        let token = JSON.parse(localStorage.getItem('auth'))

        fetch('http://127.0.0.1:8000/v1/customer',{
            method:'POST',
            headers:{
                "Authorization" : tokenType+token,
                'Accept':'application/json',
                'Content-Type':'application/json',
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
                <h3>Customer</h3>

                <div className="form-group">
                    <label>Customer name</label>
                    <input type="text" className="form-control" placeholder="Enter customer name" onChange={(text)=>{this.handleCustomerName(text)}} />
                </div>

                <div className="form-group">
                    <label>Customer email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(text)=>{this.handleEmail(text)}}/>
                </div>
                <div className="form-group">
                    <label>Customer Phone.No</label>
                    <input type="number" className="form-control" placeholder="Enter phone no" onChange={(text)=>{this.handlePhoneNumber(text)}}/>
                </div>
                <div className="form-group">
                    <label>Customer Street</label>
                    <input type="number" className="form-control" placeholder="Enter Street" onChange={(text)=>{this.handleStreet(text)}}/>
                </div>
                <div className="form-group">
                    <label>Customer city</label>
                    <input type="text" className="form-control" placeholder="Enter city" onChange={(text)=>{this.handleCity(text)}}/>
                </div>



                <button type="createCustomer" className="btn btn-primary btn-block" onClick={()=>{this.createCustomer()}}>submit</button>
            </form>
            </div>
            </div>
        );
    }
}
