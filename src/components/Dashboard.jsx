import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import CloudAccount from "./CloudAccount";
import Graph3 from "./graph3";
import { IoCloseSharp } from "react-icons/io5";
import { FaSyncAlt, FaEllipsisV } from "react-icons/fa";
import AppLayout from "./AppLayout";

const Dashboard = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [widgets, setWidgets] = useState([
    "CloudAccounts",
    "CloudRiskAssessment",
  ]); // Default displayed widgets
  const [selectedWidgets, setSelectedWidgets] = useState({
    CloudAccounts: true,
    CloudRiskAssessment: true,
    Graph3: false,
  });
  const [selectedTab, setSelectedTab] = useState("CSPM");
  const [isOpen, setIsOpen] = useState(false);
  const [showAddWidget, setShowAddWidget] = useState(false);

  // Function to toggle the Add Widget component
  const handleAddWidgetClick = () => {
    setIsPanelOpen((prev) => !prev);
  };

  // Handle checkbox changes (temporary state)
  const handleCheckboxChange = (widgetType) => {
    setSelectedWidgets((prevWidgets) => ({
      ...prevWidgets,
      [widgetType]: !prevWidgets[widgetType], // Toggle the checkbox state
    }));
  };

  // Confirm the selected widgets and add/remove them from the screen
  const confirmWidgets = () => {
    const newWidgets = Object.keys(selectedWidgets).filter(
      (widgetType) =>
        selectedWidgets[widgetType] && !widgets.includes(widgetType) // Only add if not already present
    );

    const removedWidgets = widgets.filter(
      (widgetType) => !selectedWidgets[widgetType] // Remove if unchecked
    );

    // Update the widgets state:
    // Add new widgets and remove unchecked widgets
    setWidgets((prevWidgets) => [
      ...prevWidgets.filter((widget) => !removedWidgets.includes(widget)), // Remove unchecked widgets
      ...newWidgets, // Add new checked widgets
    ]);

    handleAddWidgetClick(); // Close the panel after confirming

    // Reset selectedWidgets
    setSelectedWidgets({
      CloudAccounts: true,
      CloudRiskAssessment: true,
      Graph3: false,
    });
  };

  // Render the correct widget based on the type
  const renderWidget = (widgetType) => {
    switch (widgetType) {
      case "CloudAccounts":
        return <DashboardHeader />;
      case "CloudRiskAssessment":
        return <CloudAccount />;
      case "Graph3":
        return <Graph3 />;
      default:
        return null;
    }
  };

  const widgetOptions = {
    CSPM: [
      { name: "CloudAccounts", label: "CSPM Executive Dashboard" },
      { name: "CloudRiskAssessment", label: "Cloud Account Risk Assessment" },
      { name: "Graph3", label: "CSPM Executive Dashboard percentage %" },
    ],
    CWPP: [], // Add CWPP options here
    Image: [], // Add Image options here
    Ticket: [], // Add Ticket options here
  };

  return (
    <AppLayout>
      <div className="">
        <div>
          <div className="flex justify-between items-center p-4">
            <h1 className="text-[25px] font-semibold text-gray-800">
              CNAPP Dashboard
            </h1>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleAddWidgetClick}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Add Widget
              </button>
              {showAddWidget && (
                <div className="mt-6">{/* AddCom component placeholder */}</div>
              )}
              <a href="/">
                <button className="bg-white p-2 rounded-md border border-gray-300 shadow-sm hover:bg-gray-100 cursor-pointer">
                  <FaSyncAlt className="text-gray-600" />
                </button>
              </a>
              <button className="bg-white p-2 rounded-md border border-gray-300 shadow-sm hover:bg-gray-100">
                <FaEllipsisV className="text-gray-600" />
              </button>
              <div className="relative">
                <select
                  className={`${
                    isOpen
                      ? "bg-white text-gray-800"
                      : "bg-indigo-600 text-white"
                  } font-semibold py-2 px-4 rounded-md`}
                  onFocus={() => setIsOpen(true)} // Change background to white on click
                  onBlur={() => setIsOpen(false)} // Revert back when focus is lost
                >
                  <option value="/">Last 2 days</option>
                  <option value="/">Last 7 days</option>
                  <option value="/">Last 30 days</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Render Widgets */}
        <div className="grid grid-cols-3 gap-6">
          {widgets.map((widgetType, index) => (
            <div key={index}>{renderWidget(widgetType)}</div>
          ))}
        </div>

        {/* Sliding Panel for Adding Widgets */}
        <div
          className={`fixed top-0 right-0 h-full w-[40%] bg-white shadow-lg z-50 transition-transform duration-300 ${
            isPanelOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="bg-[#14147D] h-10 text-white flex justify-between items-center px-4">
            <h2 className="text-lg font-bold">Add to Widget</h2>
            <IoCloseSharp
              className="cursor-pointer"
              onClick={handleAddWidgetClick}
              size={24}
            />
          </div>

          <div className="p-4">
            <div className="border-b border-gray-200 mb-4">
              <ul className="flex space-x-4">
                {Object.keys(widgetOptions).map((tab) => (
                  <li
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`cursor-pointer px-4 py-2 ${
                      selectedTab === tab
                        ? "border-b-2 border-blue-600 text-blue-600"
                        : "text-gray-500"
                    }`}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              {widgetOptions[selectedTab].map((widget) => (
                <label className="block mb-2" key={widget.name}>
                  <input
                    type="checkbox"
                    checked={selectedWidgets[widget.name]}
                    onChange={() => handleCheckboxChange(widget.name)}
                    className="mr-2"
                  />
                  {widget.label}
                </label>
              ))}
            </div>

            <div className="fixed bottom-0 left-0 w-full flex justify-end space-x-6 p-4 bg-white shadow-md">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
                onClick={handleAddWidgetClick} // Cancel closes the panel
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={confirmWidgets}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
