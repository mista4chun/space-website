function Crew2() {
  return (
    <section>
      <img
        src="/assets/crew/image-mark-shuttleworth.png"
        alt="mark-shuttleworth"
        className="mx-auto w-[40%] border-b border-gray-600 pt-5 md:hidden"
      />

      <div className="mt-24 flex w-full flex-col items-center justify-center space-y-10 md:mt-16 md:text-center lg:-mt-20 lg:flex-row lg:justify-between lg:space-y-0 lg:text-left">
        <div>
          <h1 className="pb-2 text-gray-400 md:text-3xl lg:-mt-8 lg:pb-4">
            MISSION SPECIALIST
          </h1>
          <h2 className="pb-3 uppercase  md:pb-8 md:text-6xl lg:pb-14 lg:text-5xl">
            Mark Shuttleworth
          </h2>
          <p className="max-w-xs text-xs capitalize leading-loose text-slate-300 md:max-w-xl md:text-base lg:max-w-lg">
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the
            company behind the Linux-based Ubuntu operating system. Shuttleworth
            became the first South African to travel to space as a space
            tourist.
          </p>
        </div>
        <div className="w-1/2">
          <img
            src="/assets/crew/image-mark-shuttleworth.png"
            alt="mark-shuttleworth"
            className="hidden w-96 md:mt-28 md:block lg:ml-44 lg:mt-0"
          />
        </div>
      </div>
    </section>
  );
}

export default Crew2;
