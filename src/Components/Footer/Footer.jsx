import React from 'react'
import logo from './Img/MyLogo.png'
import line from './Img/line.png'
import './Footer.css'
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div className="column">
            <img src={logo} alt="" />
            <p>“One girl empowers another. Let's change lives together: one girl, one woman and one human being at a time.”</p>
            <p>Phone: +91 7973931882</p>
            <p>Email: info@girlpowertalk.com</p>
          </div>
          <div className="column">
            <h2>About</h2>
            <a href="/">About Us</a>
            <a href="/">Blog</a>
            <a href="/">Press</a>
          </div>
          <div className="column">
            <h2>Team</h2>
            <a href="/">Apply Now</a>
            <a href="/">Our Leaders</a>
            <a href="/">Gallery</a>
            <a href="/">Videos</a>
          </div>
          <div className="column">
            <h2>Company</h2>
            <a href="/">Careers</a>
            <a href="/">Submit Your Story</a>
            <a href="/">Get Direction</a>
            <a href="/">Privacy Policy</a>
          </div>
          <div className="column action">
            <button className="Applybtn">Apply Now</button>
            <button className="Contactbtn">Contact Us</button>
            <h2>Star Rating</h2>
            <div className="star">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
            </div>
            <div className="rev">
              <i>45 Reviews</i>
            </div>
          </div>
        </div>
        <div className="middle">
          <img src={line} alt="" />
        </div>
        <div className="bottom">
          <div className="column">
            <div className="leftColumn">
              <p>GIRL POWER TALK | © COPYRIGHT 2023</p>
            </div>
            <div className="rightColumn">
              <a href="/"><ion-icon name="logo-facebook"></ion-icon></a>
              <a href="/"><ion-icon name="logo-twitter"></ion-icon></a>
              <a href="/"><ion-icon name="logo-instagram"></ion-icon></a>
              <a href="/"><ion-icon name="logo-linkedin"></ion-icon></a>
              <a href="/"><ion-icon name="logo-youtube"></ion-icon></a>
              <a href="/"><ion-icon name="logo-tiktok"></ion-icon></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer