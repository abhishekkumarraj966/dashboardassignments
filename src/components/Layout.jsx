import React from "react";
import Navbar from "./Navbar";
import CwppDashbord from "./CwppDashbord";
import RegistryScan from "./RegistryScan";
import Dashboard from "./Dashboard";
import AppLayout from "./AppLayout";
const Layout = () => {
  return (
    <div className="bg-[#F0F3F3]">
      <Navbar />
      <Dashboard />

      <CwppDashbord />
      <RegistryScan />
    </div>
  );
};

export default Layout;
