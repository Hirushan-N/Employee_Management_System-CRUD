import logo from "../logo.svg";
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";


class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Student: [],
    };
  }

  render() {
    return (
      <div className="bg-dark font-monospace">
        <header >
        <nav className="navbar">
           <div>
           <h1 className="text-info">
            <img src={logo} className="App-logo" alt="logo" />
            Employee Management System
          </h1>
           </div>
           <div style={{marginRight:70}}>
             <ul className="list-unstyled">
           
               <li ><b><Link className="navbar-brand nav-element mt-n1" to={{pathname :'/employees'}}> View Our Employees </Link></b></li>
               <li ><b> <Link className="navbar-brand nav-element mt-n1" to={{pathname :'/add-employee/_add'}}> Employee Registration </Link></b> </li>
             </ul>
           </div>


         </nav>
         
        </header>
      </div>
    );
  }
}
export default withRouter(HeaderComponent);
