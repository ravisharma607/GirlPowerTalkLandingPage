import React from 'react'
import latest from './Img/04.jpg'
import './Latest.css'
import LatestCarousel from './LatestCarousel'
const Latest = () => {
  return (
<>
<div className="latest-box-container">
        <div className="heading">
            <h2>Latest Reads</h2>
            <p>Our platform is a medium for voicing the opinions and concerns of our society. We are committed to sharing the voices of all individuals, especially youth and women. We amplify the stories of our societies' unsung (s)heroes through our #PeopleWeAdmire series and share our collective experiences through the pieces we author with our diverse collaborators.</p>
        </div>
        <div className="detailed-box">
            <div className="left">
                <img src={latest} alt="" />
                <ion-icon name="share-social-outline"></ion-icon>
            </div>
            <div className="right">
                <h2>Should I Come Out?</h2>
                <p>Do You Need to Come Out? Advantages and Disadvantages of Coming Out Am I Happy to Have Come Out? Overview: Coming out or not is a decision every LGBTQIA+ person needs to make at some ...</p>
            <div className="Latestfooter">
                <div className="left"><p>February 19,2023</p></div>
                <div className="right"><button className="Carrbtn">Read Full Article<ion-icon name="arrow-forward-outline"></ion-icon></button></div>
            </div>
            </div>
        </div>
        <div className="cardsContent">
        <LatestCarousel />
        </div>
    </div>

</>
  )
}

export default Latest