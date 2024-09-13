function Crew4() {
  return (
    <section>
      <img
        src="/assets/crew/image-anousheh-ansari.png"
        alt="anousheh-ansari"
        className="mx-auto w-[50%] border-b border-gray-600 pt-10 md:hidden"
      />

      <div className="mt-28 flex w-full flex-col items-center justify-center space-y-10 md:mt-16 md:text-center lg:-mt-3 lg:flex-row lg:justify-between lg:space-y-0 lg:text-left">
        <div>
          <h1 className="pb-2 uppercase text-gray-400 md:text-3xl lg:-mt-8 lg:pb-4">
            Flight Engineer
          </h1>
          <h2 className="pb-3 uppercase tracking-wider md:pb-8 md:text-6xl lg:pb-14 lg:text-5xl">
            Anousheh Ansari
          </h2>
          <p className="max-w-xs text-xs capitalize leading-loose text-slate-300 md:max-w-lg md:text-base">
            Anousheh Ansari is an Iranian American engineer and co-founder of
            Prodea Systems. Ansari was the fourth self-funded space tourist, the
            first self-funded woman to fly to the ISS, and the first Iranian in
            space.
          </p>
        </div>
        <div className="w-1/2">
          <img
            src="/assets/crew/image-anousheh-ansari.png"
            alt="anousheh-ansari"
            className="hidden w-96 md:mt-28 md:block lg:ml-44 lg:mt-0 border-b border-gray-600"
          />
        </div>
      </div>
    </section>
  );
}

export default Crew4;
