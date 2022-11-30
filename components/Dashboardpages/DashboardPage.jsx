import React, { useState } from "react";
import { BsSpeedometer2 } from "react-icons/bs";
import { dashboardCards } from "../data/dashboardData";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { pieData, pieDataSet } from "../data/pieData";
import { lineData, lineDataSets, linesOptions } from "../data/lines";

import { Chart as ChartJs } from "chart.js/auto";
import { data } from "autoprefixer";

export default function DashboardPage() {
  const [lines, setLines] = useState({
    labels: lineData.map((data) => data.month),
    datasets: lineDataSets.map((data) => data),
  });

  const [pie, setPie] = useState({
    labels: ["Completed", "Pending", "Not yet completed"],
    datasets: pieDataSet,
  });
  return (
    <div className="fixed w-[80%] h-full  top-[4rem] left-[23rem] mr-[5rem]">
      <main className="h-full pb-16 overflow-y-auto">
        <div className="container grid px-6 mx-auto">
          {/* heading */}
          <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
            Dashboard
          </h2>

          {/* topbar thingy */}
          <a className="flex items-center justify-between w-[90%] p-4 mb-8 text-sm font-semibold text-purple-100 bg-zinc-500 rounded-lg shadow-md focus:outline-none focus:shadow-outline-green">
            <div className="flex items-center gap-3">
              <BsSpeedometer2 className="w-5 h-5 text-gray-50" />
              <span>Some Information about the Dashboard</span>
            </div>
            <span className="cursor-pointer">View more &rarr;</span>
          </a>

          {/* cards */}
          <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 w-[90%]">
            {/* card */}
            {dashboardCards.map((card, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
                >
                  <div className={`p-3 mr-4 rounded-full ${card.color}`}>
                    {card.icon}
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400 capitalize">
                      {card.title}
                    </p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 capitalize">
                      {card.number}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* charts */}
          <div className="flex  items-start gap-8">
            <div className="min-w-0 w-[45%] h-[26.6rem] p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 mb-4">
              <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                Students
              </h4>
              <Line
                data={lines}
                options={{
                  responsive: true,
                  plugins: {
                    legend: false,
                    tooltip: {
                      mode: "index",
                      intersect: false,
                    },
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
                }}
              />
              <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-1 bg-teal-500 rounded-full"></span>
                  <span>Courses</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
                  <span>Students</span>
                </div>
              </div>
            </div>

            <div className="min-w-0 w-[42%]  p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 mb-4">
              <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                Pie Data
              </h4>

              <div className="w-[54%] h-[20rem] my-0 mx-auto">
                <Pie
                  data={pie}
                  options={{
                    responsive: true,
                    cutoutPercentage: 20,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                />
              </div>

              <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-1 bg-blue-600 rounded-full"></span>
                  <span>Pending</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-1 bg-teal-500 rounded-full"></span>
                  <span>Completed</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
                  <span>Not yet Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
