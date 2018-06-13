import React, {Component} from 'react';
import {Form, FormGroup, Col, FormControl, Button} from "react-bootstrap";
import axios, {getHeaders} from "../../api/AxiosInstance";

class CreateFactory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            factoryName: '',
            lowerRange: '',
            upperRange: ''
        }

        this.handleCreate = this.handleCreate.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e, name) {
        this.setState({[name]: e.target.value});
    }

    handleCreate(event) {
        if (this.state.lowerRange < this.state.upperRange) {
            event.preventDefault();

            var payload = {
                "name": this.state.factoryName,
                "lower_range": this.state.lowerRange,
                "upper_range": this.state.upperRange
            }

            axios.post('/factory', payload)
                .then(function (response) {
                })
                .catch(function (error) {
                });

        }
        else {
            alert("Lower range should be less than upper range");
        }

    }

    render() {
        return (
            <div>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalName">
                        <Col sm={2}>
                            Factory Name
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" name="factoryName" placeholder="Name"
                                         onChange={(e) => this.handleInputChange(e, 'factoryName')} required/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalLowerBound">
                        <Col sm={2}>
                            Lower Bound
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" name="lowerRange" placeholder="Lower Bound"
                                         onChange={(e) => this.handleInputChange(e, 'lowerRange')} required/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalUpperBound">
                        <Col sm={2}>
                            Upper Bound
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" name="upperRange" placeholder="Upper Bound"
                                         onChange={(e) => this.handleInputChange(e, 'upperRange')} required/>
                        </Col>
                    </FormGroup>


                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" onClick={(event) => this.handleCreate(event)}>Create</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}


export default CreateFactory;