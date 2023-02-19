import React from 'react'
import './Partners.css'
import PartnersImgAPI from './PartnersImgAPI'
const Partners = () => {
    return (
        <>
            <div className="partners-box">
                <div className="heading">
                    <h2>Our Partners</h2>
                </div>
                <div className="ImgCard">
                    {
                        PartnersImgAPI.map((value, index) => {
                            return <img src={value.src} alt="" key={index}/>
                        })
                    }
                </div>
                <button className="btn">Collaborate With Us</button>
            </div>
        </>
    )
}

export default Partners