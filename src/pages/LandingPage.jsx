import suitcaseIcon from "../assets/suitcase 1.svg";
import placeholderIcon from "../assets/placeholder 1.svg";
import rightArrow from "../assets/rightArrow.svg";
import { cities, steps } from "../DataContent";
import CityButton from "../components/CityButton";
import InputWithIcon from "../components/InputWithIcon";
import VideoSection from "../components/VideoSection";
import StepCard from "../components/StepCard";
import Footer from "../components/FooterContent";

const LandingPage = () => {
  return (
    <div>
      <header className="bg-[url(./assets/bgImage.svg)] bg-cover bg-center h-[609px] w-full">
        <div className="flex flex-col justify-center items-center relative h-full translate-y-10">
          <h1 className="text-[35px] sm:text-[45px] md:text-[55px] font-bold text-white text-center">
            Are You a Supplier?
          </h1>
          <p className="text-[20px] sm:text-[35px] md:text-[55px] font-normal text-white text-center leading-10">
            Explore Matching Opportunities.
          </p>
          <div className="flex flex-col sm:flex-row p-2 mt-14 items-center space-x-0 sm:space-x-4 w-5/6 2xl:w-2/5 space-y-4 sm:space-y-0">
            {/* Service Input */}
            <InputWithIcon
              icon={suitcaseIcon}
              placeholder="Search your required service here"
            />

            {/* Location Input */}
            <InputWithIcon
              icon={placeholderIcon}
              placeholder="Search your desired location here"
            />

            {/* Search Button */}
            <button className="bg-[#00732f] text-white px-6 py-4 rounded font-medium hover:bg-green-700 w-full sm:w-auto">
              Search
            </button>
          </div>
          <p className="p-2 mt-8 text-white font-bold text-center">
            Are you a buyer?
            <span className="underline underline-offset-4 font-thin ms-4">
              Click here if you are looking to post a requirements
            </span>
          </p>
        </div>
      </header>
      <main className="relative z-10 mt-10 bg-white mx-auto max-w-7xl py-14 px-4 sm:px-6">
        <section className="mb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <h1 className="text-2xl md:text-4xl font-bold">
                Ready to dive into HABOT?
              </h1>
              <p className="text-sm font-thin text-black-500 tracking-wider leading-6 lg:pr-10">
                Signing up with HABOT opens the door to a world of new
                opportunities and potential for business growth. Gain access to
                a vibrant community of like-minded individuals, unlock valuable
                resources, and take the first step towards realizing your
                entrepreneurial dreams.
              </p>
              <button className="flex items-center gap-8 bg-[#00732f] text-white px-6 py-4 rounded font-medium hover:bg-green-700 w-full max-w-64 h-14 md:h-16">
                Sgin up Today!{" "}
                <span>
                  <img src={rightArrow} alt="arrow" />
                </span>
              </button>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center lg:justify-items-end items-center">
              {cities.map((city) => (
                <CityButton key={city} cityName={city} />
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#072F57] py-12 sm:py-16 px-4 sm:px-8">
          <VideoSection />
        </section>
      </main>
      <main className="my-8 sm:my-16">
        <section className="bg-[#E8FBFF]">
          <div className="mx-auto max-w-7xl py-12 sm:py-24 px-6 sm:px-20 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0">
            <h1 className="text-2xl md:text-4xl font-bold text-center sm:text-left">
              Let Suppliers{" "}
              <span className="border-b-4 border-[#EB7150]">Find You</span>
            </h1>
            <button className="bg-[#EB7150] text-white px-6 py-4 rounded hover:bg-red-700 font-bold w-full max-w-56">
              Get Verified
            </button>
          </div>
        </section>
      </main>
      <main className="mb-28">
        <section className="mx-auto max-w-5xl py-12 sm:py-20 px-6 sm:px-20 flex flex-col gap-6 sm:gap-8 items-center">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            How it works?
          </h1>
          <p className="text-sm md:text-base font-thin text-black-500 tracking-wider leading-6 pe-4 text-center">
            Buyers post their needs and review top suppliers, while suppliers
            complete profiles, connect with potential buyers, and build
            successful business relationships, sharing valuable feedback.
          </p>
        </section>
        <section className="container mx-auto pb-12 px-6 sm:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 sm:gap-4">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                bgColor={step.bgColor}
              />
            ))}
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
