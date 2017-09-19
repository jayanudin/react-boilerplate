//import Slider from 'react-slick';
import 'assets/vendor/slick-carousel/slick.scss';
import 'assets/vendor/slick-carousel/slick-theme.scss';
import styled from 'styled-components';

const WrapperSlider = styled.div`
	.slick-slide {
		img {
			width: 100%;
		}
	}
	.slick-prev, .slick-prev {z-index:1;}
	.slick-prev {left: 25px;}
	.slick-next {right: 25px;}
`;

export default WrapperSlider;