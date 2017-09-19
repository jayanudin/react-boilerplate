import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Img from './imageStyle';
import carouselImage from 'assets/images/carousel.png';

export default class MainCarousel extends Component {
  	render() {
		return (
	    	<Carousel>
			    <Carousel.Item>
			      <Img alt="900x500" src={carouselImage}/>
			      <Carousel.Caption>
			        <h3>First slide label</h3>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <Img alt="900x500" src={carouselImage}/>
			      <Carousel.Caption>
			        <h3>Second slide label</h3>
			        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			    <Carousel.Item>
			      <Img alt="900x500" src={carouselImage}/>
			      <Carousel.Caption>
			        <h3>Third slide label</h3>
			        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			      </Carousel.Caption>
			    </Carousel.Item>
			</Carousel>
		);
	}
}