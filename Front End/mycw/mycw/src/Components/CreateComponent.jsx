import React, { Component } from "react";
import CRUDServices from "../Services/CRUDServices";

class CreateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      Name: "",
      NIC: "",
      Birthday: "",
      Address: "",
      Mobile: "",
      TelePhone: "",
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeNICHandler = this.changeNICHandler.bind(this);
    this.changeBirthdayHandler = this.changeBirthdayHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeMobileHandler = this.changeMobileHandler.bind(this);
    this.changeTelephoneHandler = this.changeTelephoneHandler.bind(this);

    this.saveOrUpdate = this.saveOrUpdate.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      CRUDServices.getById(this.state.id).then((res) => {
        let student = res.data;
        // console.log("student => " + JSON.stringify(student));
        this.setState({
          Name: student.name,
          NIC:student.nic,
          Birthday: student.birthday,
          Address: student.address,
          Mobile: student.mobile,
          Telephone: student.telephone
        });
      });
    }
  }

  saveOrUpdate = (s) => {
    s.preventDefault();
    let Employee = {
      name: this.state.Name,
      nic: this.state.NIC,
      birthday: this.state.Birthday,
      address: this.state.Address,
      mobile: this.state.Mobile,
      telephone: this.state.Telephone,
    };

    console.log("student => " + JSON.stringify(Employee));

    if (this.state.id === "_add") {
      CRUDServices.InsertEmployee(Employee).then((res) => {
        this.props.history.push("/employees");
      });
    } else {
      CRUDServices.updateEmployee(Employee, this.state.id).then((res) => {
        this.props.history.push("/employees");
      });
    }
  };

  changeNameHandler = (event) => {
    this.setState({ Name: event.target.value });
  };

  changeNICHandler = (event) => {
    this.setState({ NIC: event.target.value });
  };
  changeBirthdayHandler = (event) => {
    this.setState({ Birthday: event.target.value });
  };
  changeAddressHandler = (event) => {
    this.setState({ Address: event.target.value });
  };
  changeMobileHandler = (event) => {
    this.setState({ Mobile: event.target.value });
  };
  changeTelephoneHandler = (event) => {
    this.setState({ Telephone: event.target.value });
  };

  cancel() {
    this.props.history.push("/employees");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add New Employee</h3>;
    } else {
      return <h3 className="text-center">Update Details of {this.state.Name}</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="">
          <div className="row ">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body ">
                <form >
                  <div className="form-group">
                    <label> Name: </label>
                    <input
                      placeholder="Insert your name here"
                      name="name"
                      className="form-control"
                      value={this.state.Name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> NIC: </label>
                    <input
                      placeholder="Insert your NIC here"
                      name="nic"
                      className="form-control"
                      value={this.state.NIC}
                      onChange={this.changeNICHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Address: </label>
                    <textarea
                      placeholder="Insert your Address here"
                      name="address"
                      className="form-control"
                      value={this.state.Address}
                      onChange={this.changeAddressHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Mobile: </label>
                    <input
                      placeholder="Insert your Mobile here"
                      name="mobile"
                      className="form-control"
                      value={this.state.Mobile}
                      onChange={this.changeMobileHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Telephone: </label>
                    <input
                      placeholder="Insert your Telephone here"
                      name="telephone"
                      className="form-control"
                      value={this.state.Telephone}
                      onChange={this.changeTelephoneHandler}
                    />
                  </div>
                  <br/><br/>
                  <div className=" row">
                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdate}
                  >Save
                  </button>
                  </div>
                  <br/>
                  <div className=" row">
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                  >
                    Cancel
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <br/><br/>
        </div>
      </div>
    );
  }
}

export default CreateComponent;
