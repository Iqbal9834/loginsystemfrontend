import React, { Component } from "react";
// import  Auth  from '../auth'
export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            accountNumber:'',
            amount:'',
            type:''
        }
        this.handleAccountNumber=this.handleAccountNumber.bind(this)
        this.handleAmount=this.handleAmount.bind(this)
    }
    handleAccountNumber(text){
        this.setState({accountNumber: text.target.value})
    }
    handleAmount(text){
        this.setState({amount: text.target.value})
    }
    handleChange = e => {
        const { name, value } = e.target;
    
        this.setState({
          [name]: value
        });
    }
    makeTransaction(){
        let obj = {}
        obj.accountNumber = this.state.accountNumber
        obj.amount = this.state.amount
        obj.type = this.state.type
        let tokenType = "Bearer "
        let token = JSON.parse(localStorage.getItem('auth'))
        fetch("http://127.0.0.1:8000/v1/transaction/",{
            method:'POST',
            headers:{
                "Authorization" : tokenType+token,
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
                <h3>Transaction</h3>

                <div className="form-group">
                    <label>Account number</label>
                    <input type="string" className="form-control" placeholder="Enter account number" onChange={(text)=>{this.handleAccountNumber(text)}} />
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input type="number" className="form-control" placeholder="Enter amount" onChange={(text)=>{this.handleAmount(text)}}/>
                </div>

                <div className="radio-buttons">
                <span>&nbsp;Deposit &nbsp;</span>
                <input 
                id="deposit"
                value="deposit"
                name="type"
                type="radio"
                onChange={this.handleChange}
                />
                <span>&nbsp;Withdrawal &nbsp;</span>
                <input
                id="withdrawal"
                value="withdrawal"
                name="type"
                type="radio"
                onChange={this.handleChange}
                />
                </div>


                <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.makeTransaction()}}>submit</button>
            </form>
            </div>
            </div>
        );
    }
}
