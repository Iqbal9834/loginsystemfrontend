import React, { Component } from "react";
// import  Auth  from '../auth'
import '../style.css';
export default class Branches extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          items: []
        };
      }
    fetchData(){
        let tokenType = "Bearer ";
        let token = JSON.parse(localStorage.getItem('auth'));
        fetch('http://127.0.0.1:8000/v1/branch/',{
          method:"GET",
          headers:{
            "Authorization" : tokenType+token,
            "Accept":"application/json",
            "Content-Type":"application/json",
            },
        }).then((result)=>{
            result.json().then((res)=>{
              const items = JSON.stringify(res.data.items.branch)
              const data = JSON.parse(items)

                this.setState({items:data})
              })
        })
    }
    render() {
      const { items } = this.state;
        return (
            <div className="App">
      <h1>Get all branches</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button type="submit" className="fetch-button" onClick={()=>{this.fetchData()}}>Fetch Data</button>
        <br />
      </div>

      {/* Display data from API */}

      {/* Use JSX below for each book */}
      <div className="branches">
        <div className="branch">
          <h3>Branch Id</h3>
          <h2>Branch Name</h2>

          <div className="details">
  
          </div>
        </div>
      </div>
    </div>
        );
    }
}