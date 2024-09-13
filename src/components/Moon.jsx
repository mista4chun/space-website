function Moon() {
  return (
    <div className="lg:max-w-8xl container mx-auto flex w-full flex-col items-center justify-center text-center text-slate-300 lg:flex-row lg:justify-start lg:text-left">
      <div className="absolute top-40 md:top-60 lg:relative lg:top-0 lg:ml-28  lg:w-1/2">
        <img
          src="/assets/destination/image-moon.png"
          alt="moon"
          className="h-48 w-48 md:h-96 md:w-96"
        />
      </div>
      <div className="lg:ml-28 lg:w-1/2">
        <h1 className="pb-5 pt-5 font-Bellefair text-5xl md:pt-8 md:text-7xl lg:pt-0">
          MOON
        </h1>
        <p className="border-slate-500 px-5 pb-6 text-xs text-slate-400 md:text-lg lg:border-b lg:px-0 lg:pb-12 lg:text-base">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <hr className="mx-8 border-slate-500 lg:hidden" />
        <div className="flex items-center justify-center space-x-20 pt-5 text-sm uppercase md:text-base lg:justify-start">
          <div>
            <p className="font-thin"> Avg. distance </p>
            <p>384,400 km</p>
          </div>
          <div>
            <p className="font-thin"> Est. travel time </p>
            <p>3 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moon;
