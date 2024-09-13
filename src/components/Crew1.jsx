function Crew1() {
  return (
    <section >
      <img
        src="/assets/crew/image-douglas-hurley.png"
        alt="anousheh-ansari"
        className="mx-auto w-[50%] border-b border-gray-600 pt-5 md:hidden"
      />

      <div className="mt-16 md:mt-16 flex w-full flex-col items-center lg:text-left lg:-mt-20 justify-center md:text-center space-y-10 lg:flex-row lg:justify-between lg:space-y-0">
        <div>
          <h1 className="pb-2 text-gray-400 lg:-mt-8 lg:pb-4 md:text-3xl">
            Commander
          </h1>
          <h2 className="pb-3 tracking-wider lg:pb-14 md:pb-8 md:text-6xl lg:text-5xl">
            Douglas Hurley
          </h2>
          <p className="max-w-xs md:max-w-lg text-xs capitalize leading-loose text-slate-300 md:text-base">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
        <div className="w-1/2 ">

        <img
        src="/assets/crew/image-douglas-hurley.png"
        alt="anousheh-ansari"
        className=" w-96 lg:ml-44 hidden md:block md:mt-28 lg:mt-0"
        />
        </div>
      </div>
    </section>
  );
}

export default Crew1;
