import React, { Component } from "react";
import '../index.css'
export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            item: [],
            logginStatus: true
        }
        this.events = [
            "load",
            "mousemove",
            "mousedown",
            "click",
            "scroll",
            "keypress"
          ];
        this.warn = this.warn.bind(this);
        this.logout = this.logout.bind(this);
        this.resetTimeout = this.resetTimeout.bind(this);
      
        for (var i in this.events) {
            window.addEventListener(this.events[i], this.resetTimeout);
        }
      
        this.setTimeout();
    }
    clearTimeout() {
        if (this.warnTimeout) clearTimeout(this.warnTimeout);
        if (this.logoutTimeout) clearTimeout(this.logoutTimeout);
    }

    setTimeout() {
        this.warnTimeout = setTimeout(this.warn, 16 * 1000);
        this.logoutTimeout = setTimeout(this.logout, 30 * 1000);
    }

    resetTimeout() {
        this.clearTimeout();
        this.setTimeout();
    }

    warn() {
        alert("You will be logged out automatically in 1 minute.");
        this.logout()
    }

    logout() {
        // Send a logout request to the API
        console.log("Sending a logout request to the API...");
        this.setState({ logginStatus: false });
        localStorage.clear()
        this.props.history.push("/sign-in");
        // this.destroy(); // Cleanup
    }

    destroy() {
        this.clearTimeout();

        for (var i in this.events) {
        window.removeEventListener(this.events[i], this.resetTimeout);
        }
    }
    getProfile(){
        let tokenType = "Bearer ";
        let token = JSON.parse(localStorage.getItem('auth'));
        fetch('http://127.0.0.1:8000/v1/me/profile/',{
            method:'GET',
            headers:{
                "Authorization" : tokenType+token,
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
        }).then((result)=>{
            result.json().then((res)=>{
                if(result.status==200){
                   this.setState({item:res.data})
                }
            })
        })
    }

    render() {
        const { first_name, last_name, mobile_number } = this.state.item
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
                <p>{first_name}</p>
                <p>{last_name}</p>
                <p>{mobile_number}</p>
                <button onClick={()=>{this.getProfile()}}>get detail</button>
            </div>
            </div>
        );
    }
}
