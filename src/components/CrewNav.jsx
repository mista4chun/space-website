import { NavLink } from "react-router-dom";

function CrewNav() {
  return (
    <nav className="absolute inset-0 top-[25%] flex items-center justify-center space-x-4 md:top-[2%] md:space-x-6  lg:right-[75%] lg:top-[80%] lg:space-x-4">
      <ul>
        <li>
          <NavLink to="crew1">
            <button className="h-2.5 w-2.5 rounded-full bg-gray-500 md:h-4 md:w-4 lg:h-4 lg:w-4"></button>
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="crew2">
            <button className="h-2.5 w-2.5 rounded-full bg-gray-500 md:h-4 md:w-4 lg:h-4 lg:w-4"></button>
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="crew3">
            <button className="h-2.5 w-2.5 rounded-full bg-gray-500 md:h-4 md:w-4 lg:h-4 lg:w-4"></button>
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="crew4">
            <button className="h-2.5 w-2.5 rounded-full bg-gray-500 md:h-4 md:w-4 lg:h-4 lg:w-4"></button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default CrewNav;
