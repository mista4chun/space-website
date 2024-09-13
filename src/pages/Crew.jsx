import { Outlet } from "react-router-dom";
import PageNav from "../components/PageNav";
import CrewNav from "../components/CrewNav";

function Crew() {
  return (
    <section id="Crew" className="h-screen w-full">
      <PageNav />
      <h1 className="pt-10 text-center uppercase text-white md:ml-10 md:text-left md:text-2xl lg:ml-40 lg:pt-20">
        <span className="pr-5 font-semibold text-gray-600">02</span>Meet your
        crew
        <CrewNav />
        <Outlet />
      </h1>
    </section>
  );
}

export default Crew;
