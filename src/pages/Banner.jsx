import React, { Component } from "react";
import Slider from "react-slick";
import piratebay from '../images/banners/pirate-bay.png';
import treasureChest from '../images/banners/treasure-chest.jpg';
import legendOfTheSea from '../images/banners/legend-of-the-seas.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Banner extends Component {
    render() {
        const settings = {
            autoplay: true,
            autoplaySpeed: 1500,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div style={{ paddingTop: 10, }}>
                <Slider {...settings}>
                    <div>
                        <img src={piratebay} alt="background" style={{ height: '500px', width: '100%', filter: 'brightness(75%)', objectFit: 'cover' }}></img>
                    </div>
                    <div>
                        <img src={treasureChest} alt="background" style={{ height: '500px', width: '100%', filter: 'brightness(75%)', objectFit: 'cover' }}></img>
                    </div>
                    <div>
                        <img src={legendOfTheSea} alt="background" style={{ height: '500px', width: '100%', filter: 'brightness(75%)', objectFit: 'cover' }}></img>
                    </div>
                </Slider>
            </div>
        );
    }
}