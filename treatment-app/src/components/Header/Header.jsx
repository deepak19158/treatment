import React from "react";

const COMPANY_NAME = process.env.REACT_APP_COMPANY_NAME || "Roghar";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-gray-900">{COMPANY_NAME}</h1>
        </div>
        {/* <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900">Log in</button>
          <button className="p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
