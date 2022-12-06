import React from "react";
import DashboardPage from "../components/Dashboardpages/DashboardPage";
import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <DashboardPage />
    </>
  );
}
