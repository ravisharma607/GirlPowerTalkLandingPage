import React, { useState, useEffect } from 'react'
import '../Family/Family.css'
import './Culture.css'
import FamilyImgAPI from '../Family/FamilyImgAPI'

const Culture = () => {
    const [currentState, setcurrentState] = useState(0)
    
    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentState === 15) {
                setcurrentState(0)
            }
            else {
                setcurrentState(currentState + 1)
            }
        }, 3000);
        
        return () => {
            clearTimeout(timer)
        }
    }, [currentState])
    
    const bgImage = {
        backgroundImage: `url(${FamilyImgAPI[currentState].src})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
        margin: '0 auto',
    }
    
    let x = Math.floor((Math.random() * 16))
    const bgImage2 = {
        ...bgImage,
        backgroundImage: `url(${FamilyImgAPI[x].src})`,
    }
    let y = Math.floor((Math.random() * 16))
    const bgImage3 = {
        ...bgImage,
        backgroundImage: `url(${FamilyImgAPI[y].src})`,
    }
    let z = Math.floor((Math.random() * 16))
    const bgImage4 = {
        ...bgImage,
        backgroundImage: `url(${FamilyImgAPI[z].src})`,
    }


    return (
        <section className="cultureBox box">
                        <div className="right">
                <div className="heading">
                    <h2>Our Unique Culture</h2>
                </div>
                <div className="para">
                    <p>We believe that our careers are part of how we influence the world around us, so we strive to maintain a culture that allows each person to find purpose in their work. Our worth is determined not simply by our remuneration but also by the rewards we get from creating positive change for others. Our workplace is a happy one; we encourage our team members to maximize their work-life balance and to see their colleagues as a kind of extended familial support system. We love coming to work at Girl Power Talk because it is our second home.</p>
                </div>
                <div className="action">
                    <button className="VisionBtn">Meet Our Team</button>
                </div>
            </div>
            <div className="left">
                <div className="cards-1" style={bgImage}>

                </div>
                <div className="cards-2" style={bgImage2}>

                </div>
                <div className="cards-3" style={bgImage3}>

                </div>
                <div className="cards-4" style={bgImage4}>

                </div>
            </div>
        </section>
    )
}

export default Culture