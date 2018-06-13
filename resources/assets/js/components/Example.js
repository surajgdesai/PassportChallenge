import React, { Component } from 'react';
import {Grid} from 'react-bootstrap'
import ReactDOM from 'react-dom';
import Root from './Root'
import Factory from "./Factory";


class Example extends Component {
    render() {
        return (
        <Grid>
            <Root/>
            <Factory/>
        </Grid>
    );
    }
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}