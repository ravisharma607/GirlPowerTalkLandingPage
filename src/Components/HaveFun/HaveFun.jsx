import React from 'react'
import './HaveFun.css'
const HaveFun = () => {
  return (
    <div className="fun-box">
        <div className="left">
            <div className="heading">
                <h2>Girls Just Wanna Have Fun</h2>
            </div>
            <div className="para">
        <p>A positive work culture leads to higher productivity when it provides team members a safe space to express their concerns, removes barriers in favor of bridges for growth, and fosters resilience from stress and depression.</p>
            </div>
            <div className="action">
                <button className="FunBtn">Learn More <ion-icon name="arrow-forward-outline"></ion-icon></button>
            </div>
        </div>
        <div className="right">
        <div className="video-box flex">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JR9rMZYPkR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </div>
    </div>
  )
}

export default HaveFun