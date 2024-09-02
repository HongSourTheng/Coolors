import smallBanner from "../assets/small-banner.png";
import bigBanner from "../assets/big-banner.png";
const HeroSection = () => {
  return (
    <section className="mt-24 md:mt-20 overflow-hidden md:grid grid-cols-[45%,55%]">
      <div className="md:w-[1000px] order-last">
        <img className="md:hidden" src={smallBanner} alt="smallBanner" />
        <img
          className="hidden w-full md:inline-block "
          src={bigBanner}
          alt="bigBanner"
        />
      </div>
      <div className="text-center flex flex-col items-center gap-8">
        <h1 className="font-extrabold text-4xl  lg:text-6xl xl:text-7xl mt-8">
          The super fast <br /> color palettes <br /> generator!
        </h1>
        <p className="text-xl md:text-[15px] lg:text-xl">
          Create the perfect palette or get inspired by <br /> thousands of
          beautiful color schemes.
        </p>
        <div className="flex flex-col gap-3">
          <button className="w-60 font-semibold text-lg bg-blue-600 hover:bg-blue-700 text-white-1 py-2 rounded-xl">
            Start the generator!
          </button>
          <button className="w-60 font-semibold text-lg border-2 hover:border-gray-300  py-2 rounded-xl">
            Explore trending palettes
          </button>
        </div>
        <div className=" w-60 mt-1 flex items-center justify-center gap-3 border-2 px-1 py-2 border-red-400 rounded-lg">
          <span className="text-2xl text-yellow-400">
            <i className="fa-solid fa-trophy "></i>
          </span>
          <div className="text-left leading-4 text-orange-thin">
            <span className="text-[10px]">PRODUCT HUNT</span>
            <h2 className="font-bold text-[15px]">#1 Product of The Month</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
