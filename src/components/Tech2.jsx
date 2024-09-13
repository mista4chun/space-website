function Tech2() {
  return (
    <section>
      <img
        src="/assets/technology/image-space-capsule-landscape.jpg"
        alt="space-capsule"
        className="-mt-60 w-full md:absolute md:top-[32rem] lg:hidden"
      />

      <div className="mt-24 flex flex-col items-center justify-center text-white md:mt-10 lg:hidden">
        <p className="pb-1 uppercase text-blue-100">The Terminology...</p>
        <h1 className="pb-5 text-3xl uppercase md:text-5xl">Space Capsule</h1>
        <p className="max-w-xs text-center text-xs leading-relaxed text-blue-100 md:max-w-xl md:text-lg">
          A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth's atmosphere without wings. Our
          capsule is where you'll spend your time during the flight. It includes
          a space gym, cinema, and plenty of other activities to keep you
          entertained.
        </p>
      </div>

      {/* Large Screens */}
      <div className="container mx-auto -mt-[20rem] hidden w-full items-center justify-between text-white lg:ml-64 lg:flex xl:ml-72">
        <div className="w-1/2">
          <p className="pb-3 uppercase text-blue-100">The Terminology...</p>
          <h1 className="pb-5 text-5xl uppercase">Space Capsule</h1>
          <p className="max-w-sm text-blue-100">
          A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth's atmosphere without wings. Our
          capsule is where you'll spend your time during the flight. It includes
          a space gym, cinema, and plenty of other activities to keep you
          entertained.
          </p>
        </div>
        <div className="w-fit">
          <img
            src="/assets/technology/image-space-capsule-portrait.jpg"
            alt="space-capsule"
            className="w-[80%]"
          />
        </div>
      </div>
    </section>
  );
}

export default Tech2;
