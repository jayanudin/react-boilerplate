import React, { Component } from 'react';
import Slider from 'react-slick';
//import Img from './imageStyle';

// Assets
import carouselImage from 'assets/images/carousel.png';

// Slider Style
import WrapperSlider from './styleSlider';


export default class SlickSlider extends Component {
	render() {
		var settings = {
	      dots: true,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1
	    };

		return(
			<WrapperSlider>
				<Slider>
			        <div><img alt="900x500" src={carouselImage}/></div>
			        <div><img alt="900x500" src={carouselImage}/></div>
			        <div><img alt="900x500" src={carouselImage}/></div>
			        <div><img alt="900x500" src={carouselImage}/></div>
			        <div><img alt="900x500" src={carouselImage}/></div>
			        <div><img alt="900x500" src={carouselImage}/></div>
			    </Slider>
		    </WrapperSlider>
		)
	}
}