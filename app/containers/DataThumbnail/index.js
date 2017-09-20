/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import EasyTransition from 'react-easy-transition';
import messages from './messages';
import DataThumbnail from 'components/datathumbnail';

// Component

// Page Style
import 'sass/pages/homepage.scss';

export default class DataThumbnails extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
        <EasyTransition
            path={location.pathname}
            initialStyle={{opacity: 0}}
            transition="opacity 0.3s ease-in"
            finalStyle={{opacity: 1}} >

            <div className="page-container homepage">
        
                <Grid className="margin-bottom-15">
                    <Row>
                        <Col xs={12}>
                            <h2>Feature</h2>
                            <DataThumbnail />
                        </Col>
                    </Row>
                </Grid>
            </div>
            
        </EasyTransition>
      
    );
  }
}
