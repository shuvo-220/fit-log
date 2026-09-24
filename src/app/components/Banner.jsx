
import Image from "next/image";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="mt-8 sm:mt-12 lg:mt-15">
      <div className="bg-[#15171D] rounded-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center">

          {/* Text Area */}
          <div className="w-full lg:w-1/2 px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-16">

            <h5 className="text-xs sm:text-sm font-semibold tracking-widest text-[#CCFF00] mb-4">
              WORKOUT LIBRARY
            </h5>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-bold leading-tight text-white mb-5">
              TRAIN WITH INTENT. LOG
              <br />
              EVERY SET.
            </h1>

            <p className="max-w-xl text-sm sm:text-base leading-7 text-gray-400 mb-7">
              FitLog is a dark, no-nonsense gym companion: pick a lift,
              lock it into today&apos;s plan, and watch the week&apos;s
              work add up.
            </p>

            <button
              className="inline-flex items-center justify-center
              bg-[#CCFF00] text-slate-900
              px-6 py-3
              rounded-lg
              font-bold text-sm
              hover:bg-[#b8e600]
              transition duration-200
              cursor-pointer"
            >
              BROWSE WORKOUT
            </button>
          </div>

          {/* Image Area */}
          <div className="w-full lg:w-1/2 flex justify-center items-end px-6 sm:px-10 lg:px-0">
            <Image
              src={banner}
              alt="FitLog workout banner"
              className="w-full max-w-md lg:max-w-xl py-5 object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
