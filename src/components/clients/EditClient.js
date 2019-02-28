import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

class EditClient extends Component {
  render() {
    return (
      <div>
        <h1>Edit</h1>
      </div>
    );
  }
}

export default EditClient;
