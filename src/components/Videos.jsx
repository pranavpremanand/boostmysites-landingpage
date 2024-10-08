import { useRef } from "react";
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
      video1Ref.current.pause();
      video1Ref.current.currentTime = 0; // Reset to the beginning
    }
    if (video2Ref.current && video2Ref.current !== videoRef.current) {
      video2Ref.current.pause();
      video2Ref.current.currentTime = 0;
    }
    if (video3Ref.current && video3Ref.current !== videoRef.current) {
      video3Ref.current.pause();
      video3Ref.current.currentTime = 0;
    }

    // Toggle play/stop for the clicked video
    if (videoRef.current.paused) {
      videoRef.current.play(); // If the video is paused, start playing it
    } else {
      videoRef.current.pause(); // If the video is playing, stop it
      videoRef.current.currentTime = 0; // Reset to the beginning
    }
  };

  return (
    <div className="grid md:grid-cols-3 justify-center gap-5 max-w-5xl mx-auto">
      <div className="h-[70vh] md:h-[75vh]">
        <video
          ref={video1Ref}
          className="h-full w-full"
          src={vid1}
          onClick={() => handlePlay(video1Ref)}
        ></video>
      </div>
      <div className="h-[70vh] md:h-[75vh]">
        <video
          ref={video2Ref}
          className="h-full w-full"
          src={vid2}
          onClick={() => handlePlay(video2Ref)}
        ></video>
      </div>
      <div className="h-[70vh] md:h-[75vh]">
        <video
          ref={video3Ref}
          className="h-full w-full"
          src={vid3}
          onClick={() => handlePlay(video3Ref)}
        ></video>
      </div>
    </div>
  );
};

export default Videos;
