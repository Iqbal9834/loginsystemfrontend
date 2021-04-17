import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';

// import  Auth  from '../auth'
import '../style.css';
class AccountDetail extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          items:[]
        };
        this.transaction = this.transaction.bind(this)
      }
    fetchData(){
        let tokenType = "Bearer ";
        let token = JSON.parse(localStorage.getItem('auth'));
        fetch(`http://127.0.0.1:8000/v1/account/`,{
          method:"GET",
          headers:{
            "Authorization" : tokenType+token,
            "Accept":"application/json",
            "Content-Type":"application/json",
            },
        }).then((result)=>{
            result.json().then((res)=>{
              const data = JSON.parse(JSON.stringify(res.data.items.account))
                this.setState({items:data})
              })
        })
    } 
    transaction(id){
      this.history.router.push({
        pathname:"/transactions",
        state:{id:id}
      })
    }
    render() {
      const {items} = this.state
        return (
            <div className="App form-group upper-margin" >
            {/* Fetch data from API */}
            <div>
              <button type="submit" className="fetch-button" onClick={()=>{this.fetchData()}}>Fetch Data</button>
              <br />
            </div>

            {/* Display data from API */}

            {/* Use JSX below for each book */}
            <div className="branches">
              {
                items.map((item) => {
                  const id = item.id
                  return (
                    <div className="branch" onClick={(id)=>{this.transaction(id)}}>
                    <h3>Account Number: {item.accountNumber}</h3>
                    <h3>Account type: {item.accountName}</h3>

                    <div className="details">
                    <p>Total balance: {item.balance}</p>
                    </div>
                    </div>
                  )
                })
              }
              </div>
            </div>
        );
    }
}
export default withRouter(AccountDetail);