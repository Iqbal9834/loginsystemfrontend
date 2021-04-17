import React, { Component } from "react";
// import  Auth  from '../auth'
import '../style.css';
export default class Transactions extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          items:[]
        };
      }
    fetchData(){
        let tokenType = "Bearer ";
        let token = JSON.parse(localStorage.getItem('auth'));
        fetch(`http://127.0.0.1:8000/v1/account/${this.props.location.state.id}/transactions`,{
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
                  return (
                    <div className='branch' >
                    <h3>Date of Transaction: {item.date}</h3>
                    <h3>Mode of transaction: {item.type}</h3>

                    <div className="details">
                    <p>Amount of transaction: {item.amount}</p>
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