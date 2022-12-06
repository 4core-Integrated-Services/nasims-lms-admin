import React from "react";
import QuizPage from "../components/Dashboardpages/QuizPage";
import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";

export default function quiz() {
  return (
    <>
      <Topbar />
      <Sidebar />
      <QuizPage />
    </>
  );
}
