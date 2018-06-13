import React , {Component} from 'react';
import {Modal, Button} from "react-bootstrap";
import CreateFactory from "../Modals/CreateFactoryModalBody";
import CreateChildFactory from "../Modals/CreateFactoryChildModalBody";
import UpdateFactory from "../Modals/UpdateFactoryModalBody";
import DeleteFactory from "./DeleteFactoryModalBody";

export default class ModalContainer extends Component {
    constructor(props){
        super(props);
        this.selectedModal = this.selectedModal.bind(this);
    }

    selectedModal(cmodal){
        switch (cmodal) {
            case 'CREATE_FACTORY':
                return <CreateFactory />;

            case 'ADD_NODE':
                return <CreateChildFactory currentFactory = {this.props.currentFactory} />;

            case 'EDIT_NODE':
                return <UpdateFactory currentFactory = {this.props.currentFactory}/>;

            case 'DELETE_NODE':
                return <DeleteFactory currentFactory = {this.props.currentFactory}/>;

            default:
                return null;
        }
    }

    render(){

        return(
            <div>
                <Modal
                    show={this.props.show}
                    onHide={this.props.onHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header>

                    </Modal.Header>
                    <Modal.Body>
                        {this.selectedModal(this.props.currentModal)}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}