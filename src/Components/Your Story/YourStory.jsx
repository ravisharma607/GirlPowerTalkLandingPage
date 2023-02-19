import React from 'react'
import './YourStory.css'
import YourStoryImgAPI from './YourStoryImgAPI'
const YourStory = () => {

    return (
        <section className="storyBox">
                        <div className="storyLeft">
                <div className="heading">
                    <h2>Share Your Story With Us</h2>
                </div>
                <div className="para">
                    <p>Do you have a personal or professional story that can inspire other people? We are interested in your journey and recognize that your struggles and successes define you. Amplifying your voice is at the core of the Girl Power Talk movement. We are all ears. Please take the pen and tell us your story. Together, we will empower the next generation of leaders.</p>
                </div>
                <div className="action">
                    <button className="FunBtn">Tell Your Story <ion-icon name="arrow-forward-outline"></ion-icon></button>
                </div>
            </div>
            <div className="storyRight">
                <div className="image-cards">
                    {
                        YourStoryImgAPI.map((e,index)=>{
                            return <div className="cards" key={index}>
                            <img src={e.src} alt="" />
                            <div className="overCard">
                                <p>{e.para}</p>
                                <button className="btn">Read More</button>
                            </div>
                        </div> 
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default YourStory