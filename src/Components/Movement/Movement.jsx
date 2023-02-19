import React from 'react'
// import movement_img from './Img/movement.png'
import './Movement.css'
const Movement = () => {
  return (
    <div className="movement">
        <div className="left">
            {/* <img src={movement_img} alt="" /> */}
        </div>
        <div className="right">
    <div className="heading">
        <h3>Starting a Movement</h3>
    </div>
    <div className="para">
        <p>Girl Power Talk was founded on the idea that young India needs an innovative new work culture that equally harnesses people's talents, irrespective of their gender. Girl Power Talk is more than a company. We are a movement rooted in empowerment, professional ambition, and social impact. For generations, women have been relegated to secondary roles, and the youth exploited for their energy and inexperience. We are a culture that will make history by changing this dynamic and writing the beautiful next chapter in this story.</p>
    </div>
    <div className="action">
        <button className="btn" id='btn'>Apply Now</button>
    </div>
        </div>
    </div>
  )
}

export default Movement