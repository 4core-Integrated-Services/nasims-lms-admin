export const lineData = [
  {
    id: 1,
    month: "January",
    courses: 4,
    student: 25,
  },
  {
    id: 2,
    month: "February",
    courses: 7,
    student: 15,
  },
  {
    id: 3,
    month: "March",
    courses: 13,
    student: 17,
  },
  {
    id: 4,
    month: "April",
    courses: 15,
    student: 25,
  },
  {
    id: 5,
    month: "May",
    courses: 20,
    student: 31,
  },
  {
    id: 6,
    month: "June",
    courses: 22,
    student: 37,
  },
  {
    id: 6,
    month: "July",
    courses: 37,
    student: 37,
  },
];

export const lineDataSets = [
  {
    label: "Courses",
    backgroundColor: "#0694a2",
    borderColor: "#0694a2",
    data: [21, 15, 23, 14, 14, 16, 30],
    fill: false,
  },
  {
    label: "Students",
    fill: false,
    backgroundColor: "#7e3af2",
    borderColor: "#7e3af2",
    data: [25, 18, 11, 12, 17, 19, 27],
  },
];

export const linesOptions = {
  responsive: true,
  legend: {
    display: false,
  },
  tooltips: {
    mode: "index",
    intersect: false,
  },
  hover: {
    mode: "nearest",
    intersect: true,
  },
  scales: {
    x: {
      display: true,
      scaleLabel: {
        display: true,
        labelString: "Month",
      },
    },
    y: {
      display: true,
      scaleLabel: {
        display: true,
        labelString: "Value",
      },
    },
  },
};
