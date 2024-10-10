import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import vid1 from "../assets/videos/vid1.mp4";
import vid2 from "../assets/videos/vid2.mp4";
import vid3 from "../assets/videos/vid3.mp4";
import { BiPlay } from "react-icons/bi";

const Videos = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);

  // State to track if videos are playing
  const [isPlaying, setIsPlaying] = useState({
    video1: false,
    video2: false,
    video3: false,
  });

  // Function to handle video play
  const handlePlay = (videoRef, videoKey) => {
    // Pause all other videos except the one clicked
    if (video1Ref.current && video1Ref.current !== videoRef.current) {
      video1Ref.current.seekTo(0); // Reset to the beginning
      video1Ref.current.getInternalPlayer().pause();
      setIsPlaying((prev) => ({ ...prev, video1: false }));
    }
    if (video2Ref.current && video2Ref.current !== videoRef.current) {
      video2Ref.current.seekTo(0);
      video2Ref.current.getInternalPlayer().pause();
      setIsPlaying((prev) => ({ ...prev, video2: false }));
    }
    if (video3Ref.current && video3Ref.current !== videoRef.current) {
      video3Ref.current.seekTo(0);
      video3Ref.current.getInternalPlayer().pause();
      setIsPlaying((prev) => ({ ...prev, video3: false }));
    }

    // Toggle play/pause for the clicked video
    const player = videoRef.current.getInternalPlayer();
    if (player.paused) {
      videoRef.current.seekTo(0);
      player.play();
      setIsPlaying((prev) => ({ ...prev, [videoKey]: true }));
    } else {
      player.pause();
      videoRef.current.seekTo(0); // Reset to the beginning
      setIsPlaying((prev) => ({ ...prev, [videoKey]: false }));
    }
  };

  return (
    <div className="grid md:grid-cols-3 justify-center gap-5 max-w-5xl mx-auto">
      <div className="h-[70vh] md:h-[75vh] relative">
        <div
          onClick={() => handlePlay(video1Ref, "video1")}
          className={`absolute top-0 left-0 w-full h-full z-10 ${
            !isPlaying.video1 && "bg-black/20"
          }`}
        >
          {!isPlaying.video1 && (
            <button className="bg-primary w-[3rem] z-10 h-[3rem] p-1 flex justify-center items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <BiPlay className="text-[3rem] text-black" />
            </button>
          )}
        </div>
        <ReactPlayer
          ref={video1Ref}
          className="h-full w-full z-0"
          url={vid1}
          playing={false}
          width="100%"
          height="100%"
          pip={false}
          config={{
            file: {
              attributes: {
                controlsList: "nodownload noplaybackrate",
                disablePictureInPicture: true,
              },
            },
          }}
        />
      </div>
      <div className="h-[70vh] md:h-[75vh] relative">
        <div
          onClick={() => handlePlay(video2Ref, "video2")}
          className={`absolute top-0 left-0 w-full h-full z-10 ${
            !isPlaying.video2 && "bg-black/20"
          }`}
        >
          {!isPlaying.video2 && (
            <button className="bg-primary w-[3rem] z-10 h-[3rem] p-1 flex justify-center items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <BiPlay className="text-[3rem] text-black" />
            </button>
          )}
        </div>
        <ReactPlayer
          ref={video2Ref}
          className="h-full w-full z-0"
          url={vid2}
          playing={false}
          width="100%"
          height="100%"
          pip={false}
          config={{
            file: {
              attributes: {
                controlsList: "nodownload noplaybackrate",
                disablePictureInPicture: true,
              },
            },
          }}
        />
      </div>
      <div className="h-[70vh] md:h-[75vh] relative">
        <div
          onClick={() => handlePlay(video3Ref, "video3")}
          className={`absolute top-0 left-0 w-full h-full ${
            !isPlaying.video3 && "bg-black/20"
          }`}
        >
          {!isPlaying.video3 && (
            <button className="bg-primary w-[3rem] z-10 h-[3rem] p-1 flex justify-center items-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <BiPlay className="text-[3rem] text-black" />
            </button>
          )}
        </div>
        <ReactPlayer
          ref={video3Ref}
          className="h-full w-full z-0"
          url={vid3}
          playing={false}
          width="100%"
          height="100%"
          pip={false}
          config={{
            file: {
              attributes: {
                controlsList: "nodownload noplaybackrate",
                disablePictureInPicture: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Videos;
