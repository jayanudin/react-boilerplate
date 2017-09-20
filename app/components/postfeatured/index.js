import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Thumbnail, Grid, Row, Col, Button } from 'react-bootstrap';
import AlertContainer from 'react-alert'

import carouselImage from 'assets/images/carousel.png';


export default class PostFeatured extends Component {

	constructor(props) {
		super(props);
        this.state = {
            title: '',
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target: { value, name } }) {
        this.setState({
            [name]: value
        })
    }

   

    alertOptions = {
        offset: 14,
        position: 'top right',
        theme: 'dark',
        time: 5000,
        transition: 'scale'
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.title == '' && this.state.body == '') {
            this.msg.error('Title and Body is required');
        }else if (this.state.title == '') {
            this.msg.error('Title is required');
        }else if(this.state.body == '') {
            this.msg.error('Body is required');
        }else {
            return fetch('http://api.dev/news/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(this.state)
            }).then(response => {
                if (response.status == 200) {
                    this.msg.success('Success Input Data');
                    browserHistory.push('/feature');
                }else {
                    this.msg.error('Failed Input Data')
                }
            })
        }
        
    }


  	render() {

		return (
			<div className="row">
                <div className="col-md-6 col-md-offset-2">
                    <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Title: </label>
                            <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Body Text: </label>
                            <textarea cols="50" rows="10" className="form-control" name="body" value={this.state.body} onChange={this.handleChange}  />
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