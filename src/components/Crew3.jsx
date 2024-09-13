function Crew3() {
  return (
    <section>
      <img
        src="/assets/crew/image-victor-glover.png"
        alt="victor-glover"
        className="mx-auto w-[50%] border-b border-gray-600 pt-5 md:hidden"
      />

      <div className="mt-24 flex w-full flex-col items-center justify-center space-y-10 md:mt-16 md:text-center lg:-mt-12 lg:flex-row lg:justify-between lg:space-y-0 lg:text-left">
        <div>
          <h1 className="pb-2 text-gray-400 md:text-3xl lg:-mt-8 lg:pb-4">
            Pilot
          </h1>
          <h2 className="pb-3 uppercase tracking-wider md:pb-8 md:text-6xl lg:pb-14 lg:text-5xl">
            victor glover
          </h2>
          <p className="max-w-xs text-xs capitalize leading-loose text-slate-300 md:max-w-lg md:text-base">
            Pilot on the first operational flight of the SpaceX Crew Dragon to
            the International Space Station. Glover is a commander in the U.S.
            Navy where he pilots an F/A-18.He was a crew member of Expedition
            64, and served as a station systems flight engineer.
          </p>
        </div>
        <div className="w-1/2">
          <img
            src="/assets/crew/image-victor-glover.png"
            alt="victor-glover"
            className="hidden w-96 md:mt-28 md:block lg:ml-44 lg:mt-0"
          />
        </div>
      </div>
    </section>
  );
}

export default Crew3;
