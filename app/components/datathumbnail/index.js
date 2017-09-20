import React, { Component } from 'react';
import { Thumbnail, Grid, Row, Col, Button } from 'react-bootstrap';


import carouselImage from 'assets/images/carousel.png';


export default class DataThumbnails extends Component {

	constructor(props) {
		super(props);
        this.state = {
            items: [],
            news: this.props.news
        };

        this.deleteNews = this.deleteNews.bind(this);
    }

    deleteNews(event) {
    	this.props.actions.deleteNewsAction(this.state.news);
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

	deleteNewsAction(news) {
		const request = new Request('http://api.dev/news/delete/items.id', {
	      	method: 'DELETE'
	    });

		return fetch(request).then(response => {
	      	return response.json();
	    }).catch(error => {
	      	return error;
	    });
	}

  	render() {

		return (
			<Row>

				<table className="table">
				  	<thead>
					    <tr>
					      <th>Title</th>
					      <th>Body</th>
					      <th>Action</th>
					    </tr>
				 	</thead>
				  	<tbody>

				  	{this.state.items.map((item) => (

						<tr>
					      <td>{item.title}</td>
					      <td>{item.body}</td>
					      <td>
					      		<Button onClick={this.deleteNewsAction}>Delete</Button>
					      </td>
					    </tr>
	                ))}
				  	</tbody>
				</table>

			</Row>
		);
	}
}