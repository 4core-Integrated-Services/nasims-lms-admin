import React from "react";
import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/Sidebar/Sidebar";
import CreateCoursePage from "../components/Dashboardpages/CreateCoursePage";

export default function createCourse() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <CreateCoursePage />
    </>
  );
}
