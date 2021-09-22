import React from "react";
import CRUDServices from "../Services/CRUDServices";


class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Employee: [],
    };
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.view = this.view.bind(this);
  }

  componentDidMount() {
    CRUDServices.getAllDetails().then((response) => {
      this.setState({ Employee: response.data });
    });
  }

  edit(id) {
    this.props.history.push(`/add-employee/${id}`);
  }
  delete(id) {
    CRUDServices.deleteEmployee(id).then((res) => {
      this.setState({
        Employee: this.state.Employee.filter((Employee) => Employee.id !== id),
      });
    });
  }

  view(id) {
    this.props.history.push(`/view-employees/${id}`);
  }

  render() {
    return (
      <div>
        <br/>
        <h3 className="bg-dark text-white text-center">List Of Employees</h3>
        <table className="table table-striped table-hover table-dark table-responsive font-monospace">
          <thead>
            <tr className=" ">
              <td> Employee Id</td>
              <td> Employee Name</td>
              <td> NIC</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {this.state.Employee.map((emp) => (
              <tr key={emp.id}>
                <td >{emp.id}</td>
                <td className="text-info"> {emp.name}</td>
                <td className="text-info"> {emp.nic}</td>
                <td >
                  <button
                    onClick={() => this.edit(emp.id)}
                    className="btn btn-info"
                  >
                    Update{" "}
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.delete(emp.id)}
                    className="btn btn-danger"
                  >
                    Delete{" "}
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => this.view(emp.id)}
                    className="btn btn-info"
                  >
                    View{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableComponent;
