import React from "react";
import Chart from "./Chart";

function Dashboard() {
  return (
    <div className="flex flex-col py-10 lg:px-16 md:px10 px-6 h-screen overflow-y-auto w-full">
      <h2 className="lg:text-3xl md:text-2xl text-xl">Dashboard</h2>

      <div className="md:flex md:space-x-8 py-6">
        <div className="flex flex-col rounded-md border md:w-[400px] w-[250px] h-[150px] md:p-8 p-4 justify-center">
          <h2>Yatharth Verma</h2>
          <p className="text-gray-500 mt-3">Your Expenses: Rs10000</p>
        </div>
        <div className="flex flex-col rounded-md border md:w-[400px] w-[250px] h-[150px] md:p-8 p-4 justify-center md:mt-0 mt-4">
          <h2>Yatharth Verma</h2>
          <p className="text-gray-500 mt-3">Your Savings: Rs100000</p>
        </div>
      </div>
      <div className="flex space-x-8 py-6 w-4/5">
        <div className="flex flex-col rounded-md border w-full p-8 justify-center">
          Expenses Graph
          <Chart />
        </div>
      </div>
      <div className="md:flex md:space-x-8 py-6">
        <div className="flex flex-col rounded-md border  md:w-[400px] w-[250px] h-[200px] md:p-8 p-4 justify-center">
          <h2>Your Activity</h2>
          <li className="text-gray-500 mt-3">Sent Rs 10000 to mother</li>
        </div>
        <div className="flex flex-col rounded-md border md:w-[400px] w-[250px] h-[200px] md:p-8 p-4 justify-center md:mt-0 mt-4">
          <h2>Pending Bills</h2>
          <li className="text-gray-500 mt-3">Broadband bill: Rs 1000</li>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
