import React from "react";

const Footer = () => {
  return (
    <div className="flex items-end w-full min-h-screen  ">
      <footer className={`w-full  bg-slate-100 body-font shadow-xl`}>
        <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
    
             <h2 className="text-3xl text-black">SummerCamp</h2>
            <p className="mt-2 text-sm text-black">Learn, language and Ship!</p>
            
          </div>
          <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3  text-black text-sm font-medium tracking-widest  uppercase title-font">
                About
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className=" cursor-pointer text-black hover:text-gray-900">
                    Company
                  </a>
                </li>
                <li className="mt-3">
                  <a className=" text-black cursor-pointer hover:text-gray-900">
                    Careers
                  </a>
                </li>
                <li className="mt-3">
                  <a className=" text-black cursor-pointer hover:text-gray-900">
                    Blog
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest  uppercase title-font text-black">
                Support
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className="text-black  cursor-pointer ">
                    Contact Support
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-black cursor-pointer hover:text-gray-900">
                    Help Resources
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-black  cursor-pointer hover:text-gray-900">
                    Release Updates
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className=" text-black mb-3 text-sm font-medium tracking-widest uppercase title-font">
                Platform
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className=" text-black cursor-pointer hover:text-gray-900">
                    Terms &amp; Privacy
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-black  cursor-pointer hover:text-gray-900">
                    Pricing
                  </a>
                </li>
                <li className="mt-3">
                  <a className=" text-black cursor-pointer hover:text-gray-900">
                    FAQ
                  </a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest  uppercase text-black  title-font">
                Contact
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className=" text-black cursor-pointer hover:text-gray-900">
                    Send a Message
                  </a>
                </li>
                <li className="mt-3">
                  <a className=" text-black cursor-pointer hover:text-gray-900">
                    255 streets house 6 road 3 DHAKA-1230
                  </a>
                </li>
                <li className="mt-3">
                  <a className=" text-black cursor-pointer hover:text-gray-900">
                    +123-456-7890
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-pink-500">
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-white capitalize xl:text-center">
              © 2020 All rights reserved{" "}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
