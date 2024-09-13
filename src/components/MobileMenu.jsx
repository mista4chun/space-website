import { NavLink } from "react-router-dom";

function MobileMenu() {
  return (
    <nav className="absolute inset-0 z-10 ml-36 flex w-[70%] flex-col space-y-5 p-4 pt-28 uppercase tracking-wider text-white backdrop-blur-3xl backdrop-brightness-100 md:hidden">
      <ul className="">
        <li>
          <NavLink to="/">
            <h1 className="transition-all duration-300 hover:font-bold">
              <span className="cl pr-3 font-semibold">01</span> Home
            </h1>
          </NavLink>
        </li>
      </ul>
      <ul className="flex flex-col items-start space-y-5">
        <li>
          <NavLink to="/destination">
            <h1 className="transition-all duration-300 hover:font-bold">
              <span className="pr-3 font-semibold">02</span> Destination
            </h1>
          </NavLink>
        </li>
      </ul>
      <ul className="flex flex-col items-start space-y-5">
        <li>
          <NavLink to="/crew">
            <h1 className="transition-all duration-300 hover:font-bold">
              <span className="pr-3 font-semibold">03</span> Crew
            </h1>
          </NavLink>
        </li>
      </ul>
      <ul className="flex flex-col items-start space-y-5">
        <li>
          <NavLink to="/technology">
            <h1 className="transition-all duration-300 hover:font-bold">
              <span className="pr-3 font-semibold">04</span> Technology
            </h1>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;
