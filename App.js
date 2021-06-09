import  React,{useState,useEffect} from "react";
import "./App.css";
import db from "./firebase";
import  Video from "./Video";


function App() {
  const[videos,setvideos]=useState([]);

  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot =>{

    setvideos(snapshot.docs.map(doc =>doc.data()));
  });
    
  }, [])
  
  return (
     
    <div className="app">
    
    <div className="app_videos">
      
    {videos.map(video=>{

   <Video
    url={video.url}
    channel={video.channel}
    description={video.description}
    song={video.song}
    likes={video.likes}
    messages={video.messeges}
    shares={video.shares}/>
    })}   
    
  
    </div>
    </div>
  );
}

export default App;
