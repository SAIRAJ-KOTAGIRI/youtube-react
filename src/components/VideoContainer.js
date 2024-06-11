import React, { useEffect, useState } from "react"
// import { YOUTUBE_VIDEO_API } from "./utils/constants"
import MOCK_YOUTUBE_DATA from './utils/mockYoutubeVideosData.json'
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {

    const [videoData, setVideoData ] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        // const data = await fetch(YOUTUBE_VIDEO_API)
        // const jsondata = await data.json()
        const jsondata = MOCK_YOUTUBE_DATA
        console.log(jsondata)
        setVideoData(jsondata.items)
    }

    return (
        <div className="flex flex-wrap"> 
            {
                videoData?.map((eachVideoRecord) => (
                    <Link key={eachVideoRecord.id} to={"/watch?v=" + eachVideoRecord.id}><VideoCard key={eachVideoRecord.id} info={eachVideoRecord}/></Link>
                ))
            }
            
        </div>
    )
}

export default VideoContainer;