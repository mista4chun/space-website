function Tech1() {
  return (
    <section>
      <img
        src="/assets/technology/image-launch-vehicle-landscape.jpg"
        alt="launch-vehicle"
        className="-mt-60 w-full md:absolute md:top-[32rem] lg:hidden"
      />

      <div className="mt-24 md:mt-10 flex flex-col items-center justify-center text-white lg:hidden">
        <p className="pb-1 uppercase text-blue-100">The Terminology...</p>
        <h1 className="pb-5 text-3xl md:text-5xl uppercase">Launch Vehicle</h1>
        <p className="max-w-xs md:max-w-xl text-center  md:text-lg  leading-relaxed text-xs text-blue-100">
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch pad!
        </p>
      </div>

      {/* Large Screens */}
      <div className="container mx-auto -mt-[20rem] hidden w-full items-center justify-between text-white lg:ml-64 lg:flex xl:ml-72">
        <div className="w-1/2">
          <p className="pb-3 uppercase text-blue-100">The Terminology...</p>
          <h1 className="pb-5 text-5xl uppercase">Launch Vehicle</h1>
          <p className="max-w-sm text-blue-100">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
        <div className="w-fit">
          <img
            src="/assets/technology/image-launch-vehicle-portrait.jpg"
            alt="launch-vehicle"
            className="w-[80%]"
          />
        </div>
      </div>
    </section>
  );
}

export default Tech1;
