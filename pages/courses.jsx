import React from "react";
import Topbar from "../components/Topbar/Topbar";
import Sidebar from "../components/Sidebar/Sidebar";
import CoursesPage from "../components/Dashboardpages/CoursesPage";

export default function createCourse() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <CoursesPage />
    </>
  );
}
