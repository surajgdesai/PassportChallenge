import React, {Component} from 'react';
import {Form, FormGroup, Col, FormControl, Button} from "react-bootstrap";
import axios, {getHeaders} from "../../api/AxiosInstance";

class CreateChildFactory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleGenerate = this.handleGenerate.bind(this);
    }

    handleInputChange(e, name) {
        this.setState({[name]: e.target.value});
    }

    handleGenerate(e) {
        if (this.state.count <= 15) {
            e.preventDefault();
            var payload = {
                "count": this.state.count,
                "factory_id": this.props.currentFactory.id
            }
            axios.post('/children', payload)
                .then(function (response) {
                    console.log('done msg is : ' + response);
                })
                .catch(function (error) {

                });
        }
        else {
            alert("Child nodes can be generated only upto 15!!");
        }

    }


    render() {

        return (
            <div>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalChild">
                        <Col sm={10}>
                            How many child nodes do you wanna generate?
                        </Col>
                        <Col sm={2}>
                            <FormControl type="number" name="count"
                                         onChange={(event) => this.handleInputChange(event, 'count')}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" onClick={(event) => this.handleGenerate(event)}>OK</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}


export default CreateChildFactory;