import React,{useRef,  useState} from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import "./Video.css";

 

function Video({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,

 }){
const [playing,setPlaying]= useState(false);
const videoRef = useRef(null);

const onVideoPress = () => {
    if (playing){
        videoRef.current.pause();
        setPlaying(false);
    } 
    else{
        videoRef.current.play();
        setPlaying(true);
    }
};

    return (
<div className="video">
<iframe width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
 onClick={onVideoPress}
ref={videoRef}
</iframe>
<VideoFooter/>
<VideoSidebar/>

</div>
                
    );

}

export default Video;
