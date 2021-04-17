import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signup";
import Branch from "./components/branch";
import Customer from "./components/customer";
import Branches from "./components/branches"
import Account from "./components/account"
import Transaction from "./components/transaction"
import AccountDetail from "./components/accountdetail"
import Transactions from "./components/transactions"
// import { ProtectedRoute } from './protected.route';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/branches"}>Branch</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div className="auth-wrapper">
        <div className="auth-inner"> */}
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route exact path="/branch" component={Branch} />
            <Route exact path="/customer" component={Customer} />
            <Route exact path="/branches" component={Branches} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/transaction" component={Transaction} />
            <Route exact path="/account/detail" component={AccountDetail} />
            <Route exact path="/transactions" component={Transactions} />
            <Route path="*" component={()=> "404 Not Found"}/>
          </Switch>
        {/* </div>
      </div> */}
    </div></Router>
  );
}

export default App;
