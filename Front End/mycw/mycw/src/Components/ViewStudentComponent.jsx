import React, { Component } from "react";
import CRUDServices from "../Services/CRUDServices";


export default class ViewStudentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      Employee: {},
    };
  }

  componentDidMount() {
    CRUDServices.getById(this.state.id).then((res) => {
      this.setState({ Employee: res.data });
    });
  }

  cancel() {
    this.props.history.push("/students");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center">{this.state.Employee.name}</h3>
          <div className="card-body">
             <div>
                 
             <table className="table">
            
                  <tbody>
                      <tr>
                      <td><label> NIC</label></td>
                      <td><label> :</label></td>
                      <td>{this.state.Employee.nic} </td>
                      </tr>
                      <br/>  <br/>
                      <tr>
                      <td><label> Address</label></td>
                      <td><label> :</label></td>
                      <td>{this.state.Employee.address} </td>
                      </tr>
                      <br/>  <br/>
                      <tr>
                      <td><label> Mobile</label></td>
                      <td><label> :</label></td>
                      <td>{this.state.Employee.mobile} </td>
                      </tr>
                      <br/>  <br/>
                      <tr>
                      <td><label> Telephone</label></td>
                      <td><label> :</label></td>
                      <td>{this.state.Employee.telephone} </td>
                      </tr>
                  </tbody>
              </table>
             </div>
             <br/>
            <div className=" row">
              <button
                className="btn btn-danger"
                onClick={this.cancel.bind(this)}

              >
                Back to Employees
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
