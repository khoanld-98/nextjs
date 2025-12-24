"use client";

import { useState } from "react";

const tabs = [
  { id: "tab1", label: "Thông tin cá nhân"},
  { id: "tab2", label: "Bài Đăng"},
];

export default function Tab() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 mt-8">
      {/* Header tabs */}
        <div className="flex border-b border-gray-200">
            <button
                onClick={() => setActiveTab('tab1')}
                className={`px-4 py-2 text-sm border-b-2 transition  font-semibold mb-2
                ${
                activeTab === 'tab1'
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
            >
                Thông tin cá nhân
            </button>

            <button
                onClick={() => setActiveTab('tab2')}
                className={`px-4 py-2 text-sm border-b-2 transition font-semibold mb-2
                ${
                activeTab === 'tab2'
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
            >
                Bài Đăng
            </button>
           
        </div>

      {/* Content */}
        <div className="mt-4">
            <div className={`p-4 text-sm text-gray-700 bg-white ${ activeTab == 'tab1' ? 'flex' : 'hidden'}`}>
                Thông tin cá nhân
            </div>
            <div className={`p-4 text-sm text-gray-700 bg-white ${ activeTab == 'tab2' ? 'flex' : 'hidden'}`}>
                Bài Đăng
            </div>
        </div>
    </div>
  );
}