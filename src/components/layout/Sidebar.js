import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <Link to="/client/add" className="btn btn-success btn-block">
      <div className="fas fa-plus"> New Client</div>
    </Link>
  );
}
