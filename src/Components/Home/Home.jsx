import React from 'react'
import bg_video from './homeVideo.mp4'
import './Home.css'
const Home = () => {
  return (
    <>
      <section className="video-container">
        <video autoPlay muted loop className='video'>
          <source src={bg_video} type='video/mp4' />
        </video>
        <div className="overlay">
        </div>
      </section>
      <section className="home-footer flex">
        <p>#WeAreGirlPowerTalk</p>
      </section>
    </>
  )
}
export default Home
