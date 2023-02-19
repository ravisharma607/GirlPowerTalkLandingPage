import FeaturedImagesAPI from './FeaturedImagesAPI'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Featured.css'
export default class Autoplay extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
    play() {
        this.slider.slickPlay();
    }
    pause() {
        this.slider.slickPause();
    }
    render() {

        function SampleNextArrow(props) {
            const { className, style, onClick } = props;
            return (
                <div
                    className={className}
                    style={{ ...style }}
                    onClick={onClick}
                />
            );
        }
        function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
                <div
                    className={className}
                    style={{ ...style }}
                    onClick={onClick}
                />
            );

        }
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };
    
    return (
    <>
    <section className="featured">
        <div className="featured-heading flex">
            <hr />
            <h3>Featured in</h3>
            <hr />
        </div>
        <div className="carousel">
            <div className="img flex">
                <div className="images">
                    <Slider {...settings} ref={slider => (this.slider = slider)}>
                        {
                            FeaturedImagesAPI.map((e, index) => {
                                return <div className="img-box"><img src={e.src} alt="unable" key={index}/></div>
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>

    </section>
    </>
)
}
}
