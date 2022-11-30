import { BsPeopleFill } from "react-icons/bs";
import { BsBookFill } from "react-icons/bs";
import { BsStars } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import { BsUpload } from "react-icons/bs";
import { BsHourglass } from "react-icons/bs";
import { BsQuestion } from "react-icons/bs";
import { BsEmojiDizzyFill } from "react-icons/bs";
import { BsEmojiExpressionlessFill } from "react-icons/bs";
import { students } from "./studentsData";

export const dashboardCards = [
  {
    title: "Total students",
    icon: <BsPeopleFill className="w-5 h-5 fill-current" />,
    number: students.length,
    color:
      "text-orange-500 bg-orange-100 dark:text-orange-100 dark:bg-orange-500",
  },
  {
    title: "Total Courses",
    icon: <BsBookFill className="w-5 h-5 fill-current" />,
    number: 12,
    color: " text-green-500 bg-green-100 dark:text-green-100 dark:bg-green-500",
  },
  {
    title: "Overall ratings",
    icon: <BsStars className="w-5 h-5 fill-current" />,
    number: 5,
    color: " text-blue-500 bg-blue-100 dark:text-blue-100 dark:bg-blue-500",
  },
  {
    title: "reviews",
    icon: <BsCheckCircleFill className="w-5 h-5 fill-current" />,
    number: 5,
    color: " text-teal-500 bg-teal-100 dark:text-teal-100 dark:bg-teal-500",
  },
  {
    title: "total video uploaded",
    icon: <BsUpload className="w-5 h-5 fill-current" />,
    number: 35,
    color:
      " text-violet-500 bg-violet-100 dark:text-violet-100 dark:bg-violet-500",
  },
  {
    title: "Pending course upload",
    icon: <BsHourglass className="w-5 h-5 fill-current" />,
    number: 0,
    color: " text-rose-500 bg-rose-100 dark:text-rose-100 dark:bg-rose-500",
  },
  {
    title: "total quiz",
    icon: <BsQuestion className="w-5 h-5 fill-current" />,
    number: 0,
    color:
      " text-emerald-500 bg-emerald-100 dark:text-emerald-100 dark:bg-emerald-500",
  },
  {
    title: "blank",
    icon: <BsEmojiExpressionlessFill className="w-5 h-5 fill-current" />,
    number: 0,
    color: " text-sky-500 bg-sky-100 dark:text-sky-100 dark:bg-sky-500",
  },
];
