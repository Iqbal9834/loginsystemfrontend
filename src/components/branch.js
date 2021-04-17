import React, { Component } from "react";
// import  Auth  from '../auth'
export default class Branch extends Component {
    constructor(props){
        super(props)
        this.state = {
            branchName:'',
            branchCity:'',
            assets:''
        }
        this.handleBranchName=this.handleBranchName.bind(this)
        this.handleBranchCity=this.handleBranchCity.bind(this)
        this.handleAssets=this.handleAssets.bind(this)
    }
    handleBranchName(text){
        this.setState({branchName: text.target.value})
    }
    handleBranchCity(text){
        this.setState({branchCity: text.target.value})
    }
    handleAssets(text){
        this.setState({assets: text.target.value})
    }
    createBranch(){
        let obj = {}
        obj.branchName = this.state.branchName
        obj.branchCity = this.state.branchCity
        obj.assets = parseInt(this.state.assets)
        let tokenType = "Bearer "
        let token = JSON.parse(localStorage.getItem('auth'))

        fetch('http://127.0.0.1:8000/v1/branch',{
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
                <h3>Branch</h3>

                <div className="form-group">
                    <label>Branch name</label>
                    <input type="text" className="form-control" placeholder="Enter branch name" onChange={(text)=>{this.handleBranchName(text)}} />
                </div>

                <div className="form-group">
                    <label>Branch city</label>
                    <input type="text" className="form-control" placeholder="Enter city" onChange={(text)=>{this.handleBranchCity(text)}}/>
                </div>
                <div className="form-group">
                    <label>Assets</label>
                    <input type="number" className="form-control" placeholder="Enter Assets" onChange={(text)=>{this.handleAssets(text)}}/>
                </div>

                <button type="createBranch" className="btn btn-primary btn-block" onClick={()=>{this.createBranch()}}>submit</button>
            </form>
            </div>
            </div>
        );
    }
}
