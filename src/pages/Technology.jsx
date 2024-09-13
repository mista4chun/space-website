import { Outlet } from "react-router-dom";
import PageNav from "../components/PageNav";
import TechNav from "../components/TechNav";

function Technology() {
  return (
    <section id="Technology" className="h-screen w-full">
      <PageNav />

      <h1 className="pt-10 text-center uppercase text-white tracking-widest md:ml-10 md:text-left md:text-2xl lg:ml-40 lg:pt-14">
        <span className="pr-5 font-semibold text-gray-600">03</span>Space Launch 101
      </h1>
      <TechNav />
      <Outlet />
    </section>
  );
}

export default Technology;
