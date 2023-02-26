import React, { useState, useEffect } from 'react'
import './Latest.css'
import latestImg from './Img/07.jpg'
import leftArrow from './Img/arrow-left.png'
import rightArrow from './Img/arrow-right.png'
import BeetaAPI from './LatestImgAPI'
const LatestCarousel = () => {
  const [currIndex, setcurrIndex] = useState(0)
  const [currPara, setcurrPara] = useState(BeetaAPI)
  console.log(currPara.length);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currIndex === (currPara.length - 1)) {
        document.querySelector('.firstCard img').classList.remove('active')
        let x = Math.floor(Math.random() * 3)
        setcurrIndex(x)
      }
      else {
        document.querySelector('.firstCard img').classList.remove('active')
        let x = Math.floor(Math.random() * currPara.length)
        setcurrIndex(currIndex + x)
      }
    }, 8000);

    return () => {
      clearTimeout(timer)
      document.querySelector('.firstCard img').classList.add('active')
    }
  }, [currIndex])
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.firstCard img').classList.remove('active')
      if (currIndex === (currPara.length - 1)) {
        setcurrIndex(0)
      }
      else {
        setcurrIndex(currIndex + 1)
        document.querySelector('.firstCard img').classList.remove('active')
      }
    }, 8000);

    return () => {
      clearTimeout(timer)
      document.querySelector('.firstCard img').classList.add('active')
    }
  }, [currIndex])
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.secondCard img').classList.remove('active')
      if (currIndex === (currPara.length - 1)) {
        setcurrIndex(0)
      }
      else {
        setcurrIndex(currIndex + 1)
        document.querySelector('.firstCard img').classList.remove('active')
      }
    }, 8000);

    return () => {
      clearTimeout(timer)
      document.querySelector('.secondCard img').classList.add('active')
    }
  }, [currIndex])
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.thirdCard img').classList.remove('active')
      if (currIndex === (currPara.length - 1)) {
        setcurrIndex(0)
      }
      else {
        setcurrIndex(currIndex + 1)
      }
    }, 8000);

    return () => {
      clearTimeout(timer)
      document.querySelector('.thirdCard img').classList.add('active')
    }
  }, [currIndex])
  return (
    <div className="latestBox">
      <div className="latestContainer">
        <div className="latestContainerTop">
          <div className="header">
            <h2>Latest Reads</h2>
            <p>Our platform is a medium for voicing the opinions and concerns of our society. We are committed to sharing the voices of all individuals, especially youth and women. We amplify the stories of our societies' unsung (s)heroes through our #PeopleWeAdmire series and share our collective experiences through the pieces we author with our diverse collaborators.</p>
          </div>
          <div className="footer">
            <div className="leftContent">
              <div className="mainImg">
              <img src={latestImg} alt="" />
            <div className="shareIcon">
            <ion-icon name="share-social-outline"></ion-icon>
            </div>
              </div>
            </div>
            <div className="rightContent">
              <h2>The Power of joyful learning ft.babar ali</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque maxime harum deleniti blanditiis nulla reprehenderit distinctio optio laudantium iusto id minus placeat vitae corporis esse, laborum repellendus voluptates suscipit obcaecati error, quisquam fugiat mollitia.</p>
              <div className="action">
                <p>February 22, 202</p>
                <button className="btn">Read Full Article <ion-icon name="arrow-forward"></ion-icon></button>
              </div>
            </div>
        <hr />
          </div>
        </div>
        <div className="latestContainerFooter">
          <div className="leftArrow">
            <img src={leftArrow} alt="" />
          </div>
          <div className="impImage">
          <div className="footerImgCards firstCard">              
            <img src={currPara[currIndex].src} alt=""/>
            <div className="hoverContent">
              <p>{currPara[currIndex].para}</p>
              <ion-icon name="share-social-outline"></ion-icon>
            </div>
          </div>
          <div className="footerImgCards secondCard">              
          <img src={currPara[currIndex].src} alt=""/>
          <div className="hoverContent">
              <p>{currPara[currIndex].para}</p>
              <ion-icon name="share-social-outline"></ion-icon>
            </div>
          </div>
          <div className="footerImgCards thirdCard">              
            <img src={currPara[currIndex].src} alt=""/>
            <div className="hoverContent">
              <p>{currPara[currIndex].para}</p>
              <ion-icon name="share-social-outline"></ion-icon>
            </div>
          </div>
          </div>
          <div className="rightArrow">
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestCarousel