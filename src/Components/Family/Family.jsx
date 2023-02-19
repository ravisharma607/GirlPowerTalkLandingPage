import React, { useState, useEffect } from 'react'
import './Family.css'
import FamilyImgAPI from './FamilyImgAPI'

const Family = () => {
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
        <section className="box">
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
            <div className="right">
                <div className="heading">
                    <h2>The Girl Power Talk Family</h2>
                </div>
                <div className="para">
                    <p>We meticulously recruit ambitious young leaders who value personal growth, professional development, and positive social change. Every candidate who is invited to join our global team is special not so much for what they do, but for who they are. We celebrate difference and believe in the collective power that is created when individuals are free to be authentic and true to themselves. Our genuine care and love for one another inspires us to work and  play harder than everyone else. Our happiness is infectious because it is real.</p>
                </div>
                <div className="action">
                    <button className="VisionBtn">Connect With Our Team</button>
                </div>
            </div>
        </section>
    )
}

export default Family