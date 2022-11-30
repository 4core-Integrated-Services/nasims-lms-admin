import React from "react";
import create from "zustand";
import { AiOutlineHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiQuillPenFill } from "react-icons/ri";
import { AiOutlineComment } from "react-icons/ai";
import { AiFillFolderAdd } from "react-icons/ai";
import Sidebar from "./Sidebar/Sidebar";
import CommentsPage from "./Dashboardpages/CommentsPage";
import DashboardPage from "./Dashboardpages/DashboardPage";
import QuizPage from "./Dashboardpages/QuizPage";
import StudentPage from "./Dashboardpages/StudentPage";
import CreateCoursePage from "./Dashboardpages/CreateCoursePage";
import Modal from "./modal/modal";

export const sidebarMenu = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: (
      <AiOutlineHome className="w-5 h-5 text-gray-900 dark:text-gray-100" />
    ),
    component: <DashboardPage />,
  },
  {
    name: "Students",
    link: "/students",
    icon: (
      <BsFillPeopleFill className="w-5 h-5 text-gray-900 dark:text-gray-100" />
    ),
    component: <StudentPage />,
  },
  {
    name: "Quiz",
    link: "/quiz",
    icon: (
      <RiQuillPenFill className="w-5 h-5 text-gray-900 dark:text-gray-100" />
    ),
    component: <QuizPage />,
  },
  {
    name: "comments",
    link: "/comments",
    icon: (
      <AiOutlineComment className="w-5 h-5 text-gray-900 dark:text-gray-100" />
    ),
    component: <CommentsPage />,
  },
  {
    name: "Create Course",
    link: "/create-course",
    icon: (
      <AiOutlineComment className="w-5 h-5 text-gray-900 dark:text-gray-100" />
    ),
    component: <CreateCoursePage />,
  },
];

export const usePage = create((set) => ({
  pageSelected: sidebarMenu.at(0),
  onMenuClick: (pageSelected) => set(() => ({ pageSelected })),
}));

export default function DashboardPageBody() {
  const pageMenu = usePage((state) => state);

  return (
    <>
      <Sidebar />
      {pageMenu.pageSelected.component}
    </>
  );
}
