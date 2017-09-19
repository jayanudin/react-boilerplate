import React, { Component } from 'react';
import { Thumbnail, Grid, Row, Col, Button } from 'react-bootstrap';


import carouselImage from 'assets/images/carousel.png';


export default class GridThumbnail extends Component {

	constructor() {
		super();
        this.state = {
            items: [],
        };
    }

	fetchData(url) {
	    this.setState({ isLoading: true });

	    fetch(url)
	        .then((response) => {
	            if (!response.ok) {
	                throw Error(response.statusText);
	            }

	            this.setState({ isLoading: false });

	            return response;
	        })
	        .then((response) => response.json())
	        .then((items) => this.setState({ items }))
	        .catch(() => this.setState({ hasErrored: true }));
	}

	componentDidMount() {
	    this.fetchData('http://api.dev/news');
	}

  	render() {

		return (
			<Row>

				{this.state.items.map((item) => (

					<Col xs={6} md={4} key={item.id}>
				      	<Thumbnail src={carouselImage} alt="242x200">
					        <h3>{item.title}</h3>
					        <p>{item.body}</p>
					        <p>
					          <Button bsStyle="primary">Button</Button>&nbsp;
					          <Button bsStyle="default">Button</Button>
					        </p>
				      	</Thumbnail>
				    </Col>
                ))}

			</Row>
		);
	}
}