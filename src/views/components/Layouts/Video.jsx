import ReactPlayer from "react-player";
import { useRef,useState } from "react";
export default function Video() {
    const playerRef = useRef(null);
  return (
    <div className="container">
    <ReactPlayer 
    ref={playerRef}
      url="https://www.youtube.com/watch?v=oUFJJNQGwhk"
      width="1080px"
      height="444px"
      playing={true}
      controls={false}
      volume={0}
    />
    </div>
  );
}
