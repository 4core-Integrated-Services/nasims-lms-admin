import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { pieData, pieDataSet } from "../data/pieData";
import { lineData, lineDataSets, linesOptions } from "../data/lines";
import { Chart as ChartJs } from "chart.js/auto";

export default function ChartComponent() {
  const [lines, setLines] = useState({
    labels: lineData.map((data) => data.month),
    datasets: lineDataSets.map((data) => data),
  });

  const [pie, setPie] = useState({
    labels: ["Completed", "Pending", "Not yet completed"],
    datasets: pieDataSet,
  });
  return (
    <>
      <div className="flex  items-start gap-8">
        <div className="min-w-0 h-auto w-[45%]  p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 mb-4">
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

        <div className="min-w-0 w-[42%] h-auto  p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 mb-4">
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
    </>
  );
}
