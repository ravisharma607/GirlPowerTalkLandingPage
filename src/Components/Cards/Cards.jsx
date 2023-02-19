import React from 'react'
import corner from './Img/corner.png'
import './Cards.css'
const Cards = () => {
    return (
        <>
            <div className="cards-container">
                <div className="cards-1">
                    <div className="corner-img">
                        <div className="left">
                            <img src={corner} alt=""/>
                        </div>
                        <div className="right">
                            <h2>Women in Technology</h2>
                        </div>
                    </div>
                    <div className="hover-box">
                        <div className="head">
                            <div className="cross"><span><ion-icon name="close-outline"></ion-icon></span>
                            </div>
                            <div className="heading"><h2>Women in Technology</h2></div>
                        </div>
                        <div className="para">
<p>                            The technology industry is becoming increasingly gender inclusive, and at Girl Power Talk, we consciously hire women for tech roles. Women, nonbinary individuals, and men work side by side on coding, UI/UX design, SEO, and data science teams. The resulting confluence of ideas, styles, and strengths affords our clients a competitive advantage when developing solutions for their challenges. Our growing team of young women in tech are leading by example for younger girls interested in pursuing STEM careers.</p>
                        </div>
                        <div className="action">
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="cards-2">
                    <div className="corner-img">
                        <div className="left">
                            <img src={corner} alt="" className='cornerImg'/>
                        </div>
                        <div className="right">
                            <h2>Diversity & Inclusion</h2>
                        </div>
                    </div>
                    <div className="hover-box">
                        <div className="head">
                            <div className="cross"><span><ion-icon name="close-outline"></ion-icon></span></div>
                            <div className="heading"><h2>Diversity & Inclusion</h2></div>
                        </div>
                        <div className="para">
                            <p>For us, diversity means strength. Our team collectively represents four continents; bringing together people of all genders, races, and religions to collaborate in harmony making us more more effective and powerful. We celebrate each individual's unique talents and perspectives, and pride ourselves on our inclusive culture that creates a safe space for all to enjoy personal and creative freedom.</p>
                        </div>
                        <div className="action">
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="cards-3">
                    <div className="corner-img">
                        <div className="left">
                            <img src={corner} className='cornerImg' alt=""/>
                        </div>
                        <div className="right">
                            <h2>Generate Impact</h2>
                        </div>
                    </div>
                    <div className="hover-box">
                        <div className="head">
                            <div className="cross"><span><ion-icon name="close-outline"></ion-icon></span></div>
                            <div className="heading"><h2>Generate Impact</h2></div>
                        </div>
                        <div className="para">
                            
                            <p>Our benevolent organization is dedicated to promoting the welfare of disadvantaged communities. Our core mission is to change lives, one person at a time. We focus intently on supporting women-owned businesses, providing education in rural communities, raising awareness on gender issues, and being a passionate voice for those without one. We encourage young women to express their opinions and realize their dreams, and we create opportunities for them to do so. Our young leaders find happiness in giving back to their communities and eradicating social injustice.</p>
                        </div>
                        <div className="action">
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="cards-4">
                    <div className="corner-img">
                        <div className="left">
                            <img src={corner} alt="" className='imagd'/>
                        </div>
                        <div className="right">
                            <h2>Entrepreneurial Culture</h2>
                        </div>
                    </div>
                    <div className="hover-box">
                        <div className="head">
                            <div className="cross"><span><ion-icon name="close-outline"></ion-icon></span></div>
                            <div className="heading"><h2>Entrepreneurial Culture</h2></div>
                        </div>
                        <div className="para">
                            <p>We offer our team the kind of intellectual freedom that allows each person to innovate and grow, regardless of their age, education, or background. We believe deeply in the creative potential of young talent and have therefore adopted an approach opposite to that of traditional companies, who limit young people by relegating them to mundane tasks. We also have a unique profit-sharing business model that rewards integrity, diligence, and performance.</p>
                        </div>
                        <div className="action">
                            <button className="btn">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards