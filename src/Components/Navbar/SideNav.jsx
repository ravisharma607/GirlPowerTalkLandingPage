import React from 'react'
import './SideNav.css'
const SideNav = () => {
    const hideSideNav = ()=>{
        document.querySelector('.sideNav').classList.remove('active')
    }
  return (
      <>
    <div className="sideNav">
        <ul id='cross' onClick={hideSideNav}><ion-icon name="close-outline"></ion-icon></ul>
        <ul><li>Apply Now</li></ul>
        <ul><li>Our Leaders</li></ul>
        <ul><li>Our Values</li></ul>
        <ul>
            <li><ion-icon name="chevron-forward-outline"></ion-icon>Women In Technology</li>
            <li><ion-icon name="chevron-forward-outline"></ion-icon>Diversity & Inclusion</li>
            <ul>
                <li><ion-icon name="chevron-forward-outline"></ion-icon>Generate Impact</li>
                <ul>
                    <li><ion-icon name="chevron-forward-outline"></ion-icon>Social Impact</li>
                    <li><ion-icon name="chevron-forward-outline"></ion-icon>Education</li>
                </ul>
            </ul>
            <li><ion-icon name="chevron-forward-outline"></ion-icon>Entrepreneurial Culture</li>
        </ul>
        <ul>
            <li>Press</li>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Events</li>
            <li>Video</li>
            <li>Merch</li>
            <li>Contact Us</li>
        </ul>
    </div>
    </>
  )
}

export default SideNav