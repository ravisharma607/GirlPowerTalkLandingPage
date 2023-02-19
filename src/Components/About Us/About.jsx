import React from 'react'
import right_image from './Img/01.png'
import './About.css'
import ImagesApi from './ImagesApi'
const About = () => {
    return (
        <>
            <div className="about-container">
                <div className="content">
                    <div className="left">
                        <div className="heading">
                            <h2>About Us</h2>
                        </div>
                        <div className="para">
                            <p>We believe that achieving true gender equality requires a radical shift in the way young women are mentored in the workplace. At Girl Power Talk, we are passionately dedicated to empowering women as well as men and nonbinary individuals with opportunities to learn confidently, feel valued, and build a career full of purpose.</p>
                        </div>
                        <div className="para">
                            <i>“Let's unlock your potential. Welcome to Girl Power Talk.“</i>
                        </div>
                        <div className="action">
                            <buton className="aboutBtn">Learn More About Us</buton>
                        </div>
                        <div className="awards">
                            <div className="awards-heading">
                                <hr />
                                <h3>AWARDS</h3>
                                <hr />
                            </div>
                            <div className="awards-images">
                                {
                                    ImagesApi.map((value, index) => {
                                        return <img src={value.src} alt="" key={index} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <img src={right_image} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About