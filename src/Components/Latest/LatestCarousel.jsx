import React from 'react'
import { useState, useEffect } from 'react'
import './Latest.css'
import left from './Img/arrow-left.png'
import right from './Img/arrow-right.png'
import LatestImgAPI from './LatestImgAPI.jsx'


const LatestCarousel = () => {
  const [currImg, setcurrImg] = useState(0)
  const [currPara, setcurrPara] = useState(LatestImgAPI)
  console.log('Getting', currPara[currImg].para);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currImg === 3) {
        setcurrImg(0)
      }
      else {
        setcurrImg(currImg + 1)
      }
    }, 8000);

    return () => {
      clearTimeout(timer)
    }
  }, [currImg])

  const cardBgImg = {
    backgroundImage: `url(${LatestImgAPI[currImg].src})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '80%',
    width: '70%',
    margin: '0 auto',
    display: 'flex',
  }

  let x = Math.floor((Math.random() * 4))
  const cardBgImg2 = {
    ...cardBgImg,
    backgroundImage: `url(${LatestImgAPI[x].src})`,
  }
  let y = Math.floor((Math.random() * 4))
  const cardBgImg3 = {
    ...cardBgImg,
    backgroundImage: `url(${LatestImgAPI[y].src})`,
  }
  function moveLeft() {
    let x = Math.floor((Math.random() * 4))
    setcurrImg(x)
  }
  function moveRight() {
    let x = Math.floor((Math.random() * 4))
    setcurrImg(x)
  }
  return (
    <>
    <div className="latest-carousel-box">
      <div className="latest-carousel">
        <div className="leftArrow">
          <img src={left} alt="" onClick={moveLeft} />
        </div>
        <div className="image-card" style={cardBgImg}>
          <div className="overCards">
            <p>{currPara[currImg].para}</p>
            <ion-icon name="share-social-outline"></ion-icon>
          </div>
        </div>
        <div className="image-card" style={cardBgImg2}>
          <div className="overCards">
            <p>{currPara[currImg].para}</p>
            <ion-icon name="share-social-outline"></ion-icon>
          </div>
        </div>
        <div className="image-card" style={cardBgImg3}>
          <div className="overCards">
            <p>{currPara[currImg].para}</p>
            <ion-icon name="share-social-outline"></ion-icon>
          </div>
        </div>
        <div className="rightArrow">
          <img src={right} alt="" onClick={moveRight} />
        </div>
      </div>
      <div className="action">
        <button className="VisionBtn">Read More Stories</button>
      </div>
      </div>
</>
  )
}

{/* <ion-icon name="share-social-outline"></ion-icon> */ }
export default LatestCarousel