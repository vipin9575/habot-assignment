import { useState } from "react";
import thumbnail from "../assets/thumbnail.svg";
import playIcon from "../assets/playIcon.svg";
import greenTick from "../assets/greenTick.svg";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState("Buyer");

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-16 container mx-auto">
      <div className="w-full sm:w-3/5 flex justify-center items-center mb-8 sm:mb-0">
        {!isPlaying ? (
          <div
            className="relative w-full aspect-video rounded-lg cursor-pointer overflow-hidden shadow-lg"
            onClick={handlePlayVideo}
          >
            {/* Thumbnail */}
            <img
              src={thumbnail}
              alt="Video Thumbnail"
              className="w-full h-full object-cover relative"
            />

            {/* Play Icon */}
            <img
              src={playIcon}
              alt="Play Icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ) : (
          <iframe
            className="w-full aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/IZLp-TZyDkQ?autoplay=1"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>

      {/* Other Content Section */}
      <div className="w-full sm:w-2/5 flex flex-col gap-12">
        <div className="flex justify-around">
          <h1
            className={`font-bold text-md md:text-3xl px-8 pb-2 cursor-pointer relative ${
              activeTab === "Buyer" ? "text-[#EB7150]" : "text-white"
            }`}
            onClick={() => setActiveTab("Buyer")}
          >
            Buyer
            {activeTab === "Buyer" && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[4px] w-[100%] bg-[#EB7150] rounded-full"></span>
            )}
          </h1>
          <h1
            className={`font-bold text-md md:text-3xl px-8 pb-2 cursor-pointer relative ${
              activeTab === "Supplier" ? "text-[#EB7150]" : "text-white"
            }`}
            onClick={() => setActiveTab("Supplier")}
          >
            Supplier
            {activeTab === "Supplier" && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[4px] w-[100%] bg-[#EB7150] rounded-full"></span>
            )}
          </h1>
        </div>

        <ul className="text-white flex flex-col gap-4">
          <li className="flex">
            <img src={greenTick} alt="tick" className="mr-3" />
            Post your requirements.
          </li>
          <li className="flex">
            <img src={greenTick} alt="tick" className="mr-3" />
            Sit back for multiple suppliers to contact you.
          </li>
          <li className="flex items-start">
            <img src={greenTick} alt="tick" className="mr-3" />
            Choose among the suppliers based on the ratings and reviews.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoSection;
