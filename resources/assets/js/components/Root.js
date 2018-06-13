import React, { Component } from 'react';
import {Glyphicon, Button} from 'react-bootstrap';
import ModalContainer from "./Modals/ModalUtility";



class Root extends React.Component{
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };

    }


    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render(){
        return (
            <div className="row header-div">
                <div className="form-inline">
                    <h2 className="header-glyph">
                        <Glyphicon glyph={"globe"}/>
                    </h2>
                    <h2 className="header-glyph">
                        Root
                    </h2>
                    <Button className="header-glyph header-btn" onClick={this.handleShow}>
                        <Glyphicon glyph={"plus"}/>
                    </Button>
                </div>
                <ModalContainer  show={this.state.show} onHide={this.handleClose} currentModal = "CREATE_FACTORY" />
            </div>
        )
    }
}


export default Root;