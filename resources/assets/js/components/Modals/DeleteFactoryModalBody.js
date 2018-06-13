import React, {Component} from 'react';
import {Form, FormGroup, Col, FormControl, Button} from "react-bootstrap";
import axios, {getHeaders} from "../../api/AxiosInstance";

class DeleteFactory extends Component {

    constructor(props) {
        super(props);
        const factory_id = this.props.currentFactory.id;
        console.log(factory_id);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(event) {
        event.preventDefault();
        axios.delete('/delete/' + this.props.currentFactory.id)
            .then(function (response) {
            })
            .catch(function (error) {

            });
    }

    render() {
        return (
            <div>
                <Form horizontal>
                    <div>
                        Are you sure you want to delete the factory?
                    </div>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" onClick={(event) => this.handleDelete(event)}>Delete</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}


export default DeleteFactory;