import { Outlet } from "react-router-dom";
import InnerNav from "../components/InnerNav";
import PageNav from "../components/PageNav";

function Destination() {
  return (
    <section id="Destination" className="h-screen w-full">
      <PageNav />

      <h1 className="lg:ml-40 md:ml-10 lg:pt-20 md:text-2xl pt-10 md:text-left text-center uppercase text-white">
        <span className="text-gray-600 pr-5 font-semibold">01</span>Pick your destination
      </h1>

      <InnerNav />
      <Outlet />
    </section>
  );
}

export default Destination;
