import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import introVid from "../../assets/videos/intro.mp4";
import JoinEntrepreneurs from "../JoinEntrepreneurs";
import { BiPlay } from "react-icons/bi";

const Banner = ({ introVidIsPlaying, setIntroVidIsPlaying }) => {
  const navigate = useNavigate();
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const handlePlayVideo = () => {
    setIntroVidIsPlaying(!introVidIsPlaying);
  };

  return (
    <div className="pt-[10rem]">
      <h1
        data-aos="zoom-in"
        className="text-[2.7rem] leading-[3rem] md:text-5xl font-semibold text-primary text-center"
      >
        Start your AI Company
      </h1>

      <div className="pt-[4rem] pb-[3rem]" data-aos="fade-up">
        <div className="h-[50vh] sm:h-[60vh] w-full lg:w-[80%] relative mx-auto -z-10">
          <div
            onClick={() => handlePlayVideo()}
            className={`absolute top-0 left-0 w-full h-full z-10 ${
              !introVidIsPlaying && "bg-black/20"
            }`}
          >
            {!introVidIsPlaying && (
              <button className="bg-primary w-[3rem] z-10 h-[3rem] p-1 flex justify-center items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <BiPlay className="text-[3rem] text-black" />
              </button>
            )}
          </div>

          {isVideoLoading && (
            <div className="absolute top-0 left-0 w-full h-[50vh] sm:h-[60vh] flex justify-center items-center">
              <span class="video-loader"></span>
            </div>
          )}
          <ReactPlayer
            url={introVid}
            playing={introVidIsPlaying} // Control playing via state
            loop={false}
            width="100%"
            height="100%"
            pip={false}
            className="h-full w-full z-0"
            onReady={() => setIsVideoLoading(false)}
            playsinline={true}
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload noplaybackrate",
                  disablePictureInPicture: true,
                  playsinline: true,
                },
              },
            }}
          />
        </div>
      </div>

      {/* Play Button */}
      {/* <div className="flex justify-center mb-5">
          <button
            onClick={handlePlayVideo}
            className="primary-btn font-medium w-[20rem] flex justify-center py-3"
          >
            {introVidIsPlaying ? "Pause" : "Play Video"}
          </button>
        </div> */}

      <div
        data-aos="fade-up"
        className="flex flex-col gap-3 w-full justify-center items-center"
      >
        <button
          onClick={() => navigate("/contact")}
          className="primary-btn font-medium w-[20rem] flex justify-center py-3"
        >
          Start your own AI company
        </button>
        <JoinEntrepreneurs />
      </div>
    </div>
  );
};

export default Banner;
