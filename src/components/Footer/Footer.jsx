import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
       
          <p className="text-white font-semibold text-lg">SummerCamp</p>
        </div>
        <div className="text-gray-400">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <p>Contact: info@yourcompany.com</p>
          <p>Address: 123 Main St, City, State</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
