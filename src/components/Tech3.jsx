function Tech3() {
  return (
    <section>
      <img
        src="/assets/technology/image-spaceport-landscape.jpg"
        alt="spaceport"
        className="-mt-60 w-full md:absolute md:top-[32rem] lg:hidden"
      />

      <div className="mt-24 flex flex-col items-center justify-center text-white md:mt-10 lg:hidden">
        <p className="pb-1 uppercase text-blue-100">The Terminology...</p>
        <h1 className="pb-5 text-3xl uppercase md:text-5xl">Spaceport</h1>
        <p className="max-w-sm text-center text-sm leading-relaxed text-blue-100 md:max-w-xl md:text-lg">
          A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
          situated to take advantage of the Earth’s rotation for launch.
        </p>
      </div>

      {/* Large Screens */}
      <div className="container mx-auto -mt-[20rem] hidden w-full items-center justify-between text-white lg:ml-64 lg:flex xl:ml-72">
        <div className="w-1/2">
          <p className="pb-3 uppercase text-blue-100">The Terminology...</p>
          <h1 className="pb-5 text-5xl uppercase">Spaceport</h1>
          <p className="max-w-sm text-blue-100">
          A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
          situated to take advantage of the Earth’s rotation for launch.
          </p>
        </div>
        <div className="w-fit">
          <img
            src="/assets/technology/image-spaceport-portrait.jpg"
            alt="spaceport"
            className="w-[80%]"
          />
        </div>
      </div>
    </section>
  );
}

export default Tech3;
