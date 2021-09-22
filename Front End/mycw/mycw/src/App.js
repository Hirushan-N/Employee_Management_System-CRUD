import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TableComponent from "./Components/TableComponent";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import ViewStudentComponent from "./Components/ViewStudentComponent";
import CreateComponent from "./Components/CreateComponent";




function App() {
  return (
    <div >
      <Router>
        <div >
        <HeaderComponent />
        </div>
       
        <div className="container " >
          <Switch>
                          <Route path = "/" exact component = {TableComponent}></Route>
                          <Route path = "/employees" component = {TableComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateComponent}></Route>
                          <Route path = "/view-employees/:id" component = {ViewStudentComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
          </Switch>
        </div>
        <div>
        <FooterComponent />
        </div>
        
      </Router>
    
    </div>
  );
}

export default App;
