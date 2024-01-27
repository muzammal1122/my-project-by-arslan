import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <nav className="flex justify-between py-3 bg-slate-100">
        <div className="px-16 max-lg:px-10 max-sm:px-4">
          <img
            className="w-32 max-md:w-28"
            src="https://weareopen.coop/wp-content/uploads/2021/04/Catalyst_logo.png"
            alt=""
          />
        </div>
        <ul className="flex gap-10 px-16 mt-2 max-lg:hidden">
          <li className="text-blue-600 underline cursor-pointer">Home</li>
          <li className="hover:text-blue-600 hover:underline cursor-pointer">
            Servies
          </li>
          <li className="hover:text-blue-600 hover:underline cursor-pointer">
            Blog
          </li>
          <li className="hover:text-blue-600 hover:underline cursor-pointer">
            About Us
          </li>
          <li className="hover:text-blue-600 hover:underline cursor-pointer">
            Contact Us
          </li>
        </ul>
      </nav>

      <div className="absolute right-16 top-5 hidden max-lg:block  max-sm:right-5">
        <div className="space-y-2">
          <div className="w-6 h-0.5 bg-gray-600"></div>
          <div className="w-6 h-0.5 bg-gray-600"></div>
          <div className="w-6 h-0.5 bg-gray-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
