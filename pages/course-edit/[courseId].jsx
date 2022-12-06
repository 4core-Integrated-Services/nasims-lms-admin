import React from "react";
import { useRouter } from "next/router";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import EditCoursePage from "../../components/Dashboardpages/EditCoursePage";

export default function CourseEdit() {
  const {
    query: { courseId },
  } = useRouter();
  return (
    <>
      <Topbar />
      <Sidebar />
      <EditCoursePage courseId={courseId} />
    </>
  );
}
