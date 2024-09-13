import { NavLink } from "react-router-dom";

function TechNav() {
  return (
    <nav className="max-w-8xl container mx-auto mt-64 flex items-center justify-center space-x-5 font-Bellefair font-semibold text-white md:mt-[28rem] lg:mt-32 lg:flex-col lg:items-start lg:space-x-0 lg:space-y-5">
      <ul>
        <li>
          <NavLink
            to="tech1"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <button className="flex h-8 w-8 items-center justify-center rounded-full border text-xs transition-all duration-200 md:h-12 md:w-12 md:text-xl lg:h-16 lg:w-16 lg:text-2xl">
              1
            </button>
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            to="tech2"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <button className="flex h-8 w-8 items-center justify-center rounded-full border text-xs transition-all duration-200 md:h-12 md:w-12 md:text-xl lg:h-16 lg:w-16 lg:text-2xl">
              2
            </button>
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            to="tech3"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <button className="flex h-8 w-8 items-center justify-center rounded-full border text-xs transition-all duration-200 md:h-12 md:w-12 md:text-xl lg:h-16 lg:w-16 lg:text-2xl">
              3
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default TechNav;
