import React, { Component } from "react";
// import  Auth  from '../auth'
export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            branch_id:'',
            customerEmail:'',
            accountName:''
        }
        this.handleBranchId=this.handleBranchId.bind(this)
        this.handleEmail=this.handleEmail.bind(this)
        this.handleAccountType=this.handleAccountType.bind(this)
    }
    handleBranchId(text){
        this.setState({branch_id: text.target.value})
    }
    handleEmail(text){
        this.setState({customerEmail: text.target.value})
    }
    handleAccountType(text){
        this.setState({accountName: text.target.value})
    }
    createAccount(){
        let obj = {}
        obj.branch_id = this.state.branch_id
        obj.customerEmail = this.state.customerEmail
        obj.accountName = this.state.accountName
        let tokenType = "Bearer "
        let token = JSON.parse(localStorage.getItem('auth'))
        fetch(`http://127.0.0.1:8000/v1/branch/${this.state.branch_id}/account/`,{
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
                <h3>Account</h3>

                <div className="form-group">
                    <label>Branch id</label>
                    <input type="number" className="form-control" placeholder="Enter branch id" onChange={(text)=>{this.handleBranchId(text)}} />
                </div>

                <div className="form-group">
                    <label>Customer customerEmail</label>
                    <input type="customerEmail" className="form-control" placeholder="Enter customerEmail" onChange={(text)=>{this.handleEmail(text)}}/>
                </div>

                <div className="form-group">
                    <label>Account Type</label>
                    <input type="text" className="form-control" placeholder="Enter account type" onChange={(text)=>{this.handleAccountType(text)}}/>
                </div>


                <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.createAccount()}}>submit</button>
            </form>
            </div>
            </div>
        );
    }
}
