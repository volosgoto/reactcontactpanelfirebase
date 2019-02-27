import React from "react";
import Sidebar from "./Sidebar";
import Clients from "../clients/Clients";
// import AddClient from "../clients/AddClient";

export default function Dashboard() {
  return (
    <div className="row">
      <div className="col-md-10">
        {/* <AddClient /> */}
        <Clients />
      </div>
      <div className="col-md-2">
        <Sidebar />
      </div>
    </div>
  );
}
