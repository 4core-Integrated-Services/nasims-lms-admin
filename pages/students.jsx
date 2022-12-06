import React from "react";
import StudentPage from "../components/Dashboardpages/StudentPage";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";

export default function students() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <StudentPage />
    </>
  );
}
