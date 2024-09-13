import { NavLink } from "react-router-dom";
import { useState } from "react";

import ButtonMenu from "./ButtonMenu";

function PageNav() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <section className="flex items-center justify-between px-10 pt-4 font-roboto md:px-0 md:pt-0 lg:pt-8">
      <img
        src="/assets/shared/logo.svg"
        alt="logo"
        className="px-0 md:px-8 lg:px-16"
      />

      <hr className="absolute ml-40 hidden w-[40rem] border-gray-700 lg:block" />

      <nav className="-ml-96 hidden w-full items-center justify-center px-8 uppercase tracking-wider md:flex md:max-w-lg md:space-x-8 md:bg-gray-900 md:py-14 md:text-gray-50 md:backdrop-blur-3xl lg:flex lg:max-w-4xl lg:space-x-16 lg:bg-transparent lg:py-7 lg:text-gray-400 lg:backdrop-blur-3xl lg:backdrop-brightness-75 xl:max-w-6xl">
        <ul>
          <li className="transition-all duration-300 hover:font-bold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-4 md:pb-14 lg:pb-6" : ""
              }
            >
              <span className="md:invisible lg:visible lg:pr-3 lg:font-bold lg:text-white">
                00
              </span>
              Home
            </NavLink>
          </li>
        </ul>
        <ul>
          <li className="transition-all duration-300 hover:font-bold">
            <NavLink
              to="/destination"
              className={({ isActive }) =>
                isActive ? "border-b-4 md:pb-14 lg:pb-6" : ""
              }
            >
              <span className="md:invisible lg:visible lg:pr-3 lg:font-bold lg:text-white">
                01
              </span>
              Destination{" "}
            </NavLink>
          </li>
        </ul>
        <ul>
          <li className="transition-all duration-300 hover:font-bold">
            <NavLink
              to="/crew"
              className={({ isActive }) =>
                isActive ? "border-b-4 md:pb-14 lg:pb-6" : ""
              }
            >
              <span className="md:invisible lg:visible lg:pr-3 lg:font-bold lg:text-white">
                02
              </span>
              Crew{" "}
            </NavLink>
          </li>
        </ul>
        <ul>
          <li className="transition-all duration-300 hover:font-bold">
            <NavLink
              to="/technology"
              className={({ isActive }) =>
                isActive ? "border-b-4 md:pb-14 lg:pb-6" : ""
              }
            >
              <span className="md:invisible lg:visible lg:pr-3 lg:font-bold lg:text-white">
                03
              </span>
              Technology{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
      <ButtonMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}

export default PageNav;
