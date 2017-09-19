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

// Component
import PostFeatured from 'components/postfeatured';

// Page Style
import 'sass/pages/homepage.scss';

export default class PostFeaturePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

    constructor() {
        super();
    }

    render() {
        return (
            <EasyTransition
                path={location.pathname}
                initialStyle={{opacity: 0}}
                transition="opacity 0.3s ease-in"
                finalStyle={{opacity: 1}} >

                <div className="page-container homepage">
                    
                    <PostFeatured />
                    
                </div>
                
            </EasyTransition>
          
        );
    }
}
