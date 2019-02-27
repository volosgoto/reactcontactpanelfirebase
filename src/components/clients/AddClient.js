import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddClient extends Component {
  render() {
    state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      balance: ""
    };

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back To Dashboard
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Add Client</div>
          <div className="card-body">
            <form action="">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  minLength="2"
                  required
                  onChange={this.onChange}
                  value={this.state.firstName}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddClient;
