import { NavLink } from "react-router-dom";

function InnerNav() {
  return (
    <nav className="mt-60 flex items-center justify-center space-x-6 text-white md:mt-[30rem] md:text-xl lg:ml-[30%] lg:mt-20">
      <ul>
        <li>
          <NavLink
            to="moon"
            className={({ isActive }) =>
              isActive ? "border-b-2 md:pb-1 lg:pb-1" : ""
            }
          >
            Moon
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            to="mars"
            className={({ isActive }) =>
              isActive ? "border-b-2 md:pb-1 lg:pb-1" : ""
            }
          >
            Mars
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            to="europa"
            className={({ isActive }) =>
              isActive ? "border-b-2 md:pb-1 lg:pb-1" : ""
            }
          >
            Europa
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            to="titan"
            className={({ isActive }) =>
              isActive ? "border-b-2 md:pb-1 lg:pb-1" : ""
            }
          >
            Titan
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default InnerNav;
