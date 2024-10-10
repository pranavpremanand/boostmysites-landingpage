import { useRef } from "react";
import ReactPlayer from "react-player";
import vid1 from "../assets/videos/vid1.mp4";
import vid2 from "../assets/videos/vid2.mp4";
import vid3 from "../assets/videos/vid3.mp4";

const Videos = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);
  const video3Ref = useRef(null);

  // Function to handle video play
  const handlePlay = (videoRef) => {
    // Pause all other videos except the one clicked
    if (video1Ref.current && video1Ref.current !== videoRef.current) {
      video1Ref.current.seekTo(0); // Reset to the beginning
      video1Ref.current.getInternalPlayer().pause();
    }
    if (video2Ref.current && video2Ref.current !== videoRef.current) {
      video2Ref.current.seekTo(0);
      video2Ref.current.getInternalPlayer().pause();
    }
    if (video3Ref.current && video3Ref.current !== videoRef.current) {
      video3Ref.current.seekTo(0);
      video3Ref.current.getInternalPlayer().pause();
    }

    // Toggle play/pause for the clicked video
    const player = videoRef.current.getInternalPlayer();
    if (player.paused) {
      videoRef.current.seekTo(0);
      player.play();
    } else {
      player.pause();
      videoRef.current.seekTo(0); // Reset to the beginning
    }
  };

  return (
    <div className="grid md:grid-cols-3 justify-center gap-5 max-w-5xl mx-auto">
      <div className="h-[70vh] md:h-[75vh] relative">
      <div
          onClick={() => handlePlay(video1Ref)}
          className="absolute top-0 left-0 w-full h-full z-10"
        ></div>
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
          // onClick={() => handlePlay(video1Ref)}
        />
      </div>
      <div className="h-[70vh] md:h-[75vh] relative">
      <div
          onClick={() => handlePlay(video2Ref)}
          className="absolute top-0 left-0 w-full h-full z-10"
        ></div>
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
          // onClick={() => handlePlay(video2Ref)}
        />
      </div>
      <div className="h-[70vh] md:h-[75vh] relative">
        <div
          onClick={() => handlePlay(video3Ref)}
          className="absolute top-0 left-0 w-full h-full z-10"
        ></div>
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
