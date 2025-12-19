import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 text-center border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6 flex flex-col items-center">
          <span className="text-xl font-black tracking-widest uppercase">
            D S <span className="text-red-600">Motors</span>
          </span>
          <p className="text-gray-500 text-sm mt-2 max-w-xs">
            Professional bike repairs and restorations in Heartland since 2015.
          </p>
        </div>
        <div className="text-gray-600 text-xs border-t border-gray-800 pt-8 mt-8">
          © {new Date().getFullYear()} D S Motors Heartland. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
