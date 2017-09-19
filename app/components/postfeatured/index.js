import React, { Component } from 'react';
import { Thumbnail, Grid, Row, Col, Button } from 'react-bootstrap';


import carouselImage from 'assets/images/carousel.png';


export default class PostFeatured extends Component {

	constructor(props) {
		super();
        this.state = {
            title: this.target,
            body: this.target
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeBody = this.handleChangeBody.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleChangeBody(event) {
        this.setState({
            body: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        
        return fetch('http://api.dev/news/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body
            })
        }).then(response => {
          if (response.status == 200) {
            console.log('success');
          }else {
            console.log('error');
          }
        })
    }


  	render() {

		return (
			<div className="row">
                <div className="col-md-6 col-md-offset-2">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Title: </label>
                            <input type="text" className="form-control" value={this.state.title} name="title" onChange={this.handleChangeTitle} />
                        </div>
                        <div className="form-group">
                            <label>Body Text: </label>
                            <textarea cols="50" rows="10" className="form-control" value={this.state.body} name="body" onChange={this.handleChangeBody}  />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-success" />
                        </div>
                    </form>
                </div>
            </div>

		);
	}
}