import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Home() {
  return (
    <section id="Home" className="h-screen w-full">
      <PageNav />
      <div className="max-w-8xl container mx-auto">
        <div className="mb-20 flex flex-col items-center space-y-4 pt-16 uppercase text-slate-300 lg:mb-0 lg:items-start">
          <p className="tracking-wider md:text-3xl lg:pt-48 lg:text-3xl">
            So, you want to travel to
          </p>
          <h1 className="text-7xl tracking-wider md:text-[150px] lg:text-[150px]">
            Space
          </h1>
          <p className="max-w-xs text-center text-xs capitalize md:max-w-lg leading-normal md:pt-8 md:text-lg lg:max-w-md lg:pt-0 lg:text-left lg:text-base">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <Link
        to="/destination"
        className="max-w-8xl container mx-auto flex items-center justify-center md:mt-60 lg:-mt-52 lg:justify-end"
      >
        <button className="h-36 w-36 rounded-full bg-white text-xl uppercase tracking-wider transition-all duration-200 hover:animate-pulse md:h-56 md:w-56 md:text-2xl lg:h-56 lg:w-56">
          explore
        </button>
      </Link>
    </section>
  );
}

export default Home;
