import React from 'react'
import './VideoCards.css'
import VideoCardsAPI from './VideoCardsAPI'
const VideoCards = () => {
  return (
    <div className="youtubeVideoCards">
        <div className="videoCards">
            <div className="video">
        {
            VideoCardsAPI.map((value,index)=>{
                return             <iframe key={index} width="395" height="290" src={value.src} title="We are Girl Power Talk | Celebrate Happy Work" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            })
        }
            </div>
        </div>
    </div>
  )
}

export default VideoCards
