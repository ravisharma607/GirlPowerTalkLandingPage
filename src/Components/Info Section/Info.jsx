import React, { useState, useEffect } from 'react'
import './Info.css'
import left from './Img/arrow-left.png'
import right from './Img/arrow-right.png'
import StatmentAPI from './StatmentAPI'
const Info = () => {

    const [currState, setcurrState] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (currState === 5) {
                setcurrState(0)
            }
            else {
                setcurrState(currState + 1)
            }
        }, 5000);
        
        return () => {
            clearTimeout(timer)
        }
    }, [currState])
    function moveLeft(){
        if(currState === 0){
            setcurrState(5)
        }
        else{
            setcurrState(currState - 1)
        }
    }
    function moveRight(){
        if(currState === 5){
            setcurrState(0)
        }
        else{
            setcurrState(currState + 1)
        }
    }
    return (
        <>
            <div className="info-container">
                <div className="infoLeft">
                    <div className="heading">
                        <h2>What People Say About Girl Power Talk?</h2>
                        <p>Girl Power Talk is a voice for those who don't have one. We build bridges by fostering collaboration across communities. When others speak, we listen. Here are a few testimonials from those whose hearts we have touched over the past few years. Their encouragement is our inspiration for tomorrow.</p>
                    </div>
                </div>
                <div className="infoRight">
                    <div className="cardBox">
                        <div className="peopleInfo">
                            <img src={StatmentAPI[currState].src} alt="" />
                            <h2>{StatmentAPI[currState].personaName}</h2>
                            <p>{StatmentAPI[currState].position}</p>
                        </div>
                        <div className="desc">
                            <div className="leftMove">
                                <img src={left} alt="" onClick={moveLeft}/>
                            </div>
                            <div className="descText">
                                <p>{StatmentAPI[currState].stat}</p>
                                <button className="btn">Connect</button>
                            </div>
                            <div className="rightMove">
                                <img src={right} alt="" onClick={moveRight}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info