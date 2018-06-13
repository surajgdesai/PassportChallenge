import React , {Component} from 'react';
import {Form,FormGroup,Col,FormControl,Button} from "react-bootstrap";
import axios, {getHeaders} from "../../api/AxiosInstance";

export default class UpdateFactory extends Component{
    constructor(props){
        super(props);

        this.state = {
            factoryName: this.props.currentFactory.name,
            lowerRange: this.props.currentFactory.lower_range,
            upperRange: this.props.currentFactory.upper_range
        };

        this.handleCreate = this.handleCreate.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e,name){
        this.setState({ [name]: e.target.value });
    }

    handleCreate(event){
        if(this.state.lowerRange < this.state.upperRange){
            event.preventDefault();
            var payload={
                "name":this.state.factoryName,
                "lower_range":this.state.lowerRange,
                "upper_range" : this.state.upperRange,
                "factory_id": this.props.currentFactory.id
            }

            axios.put('/update', payload)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {

                });
        }
        else{
            alert("lower range should be less than upper range");
        }
    }

    render(){
        return(
            <div>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalName">
                        <Col  sm={2}>
                            Factory Name
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" name="factoryName" value={this.state.factoryName} onChange = {(e) => this.handleInputChange(e,'factoryName')}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalLowerBound">
                        <Col  sm={2}>
                            Lower Bound
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" name="lowerRange" value={this.state.lowerRange} onChange = {(e) => this.handleInputChange(e,'lowerRange')}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalUpperBound">
                        <Col sm={2}>
                            Upper Bound
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" name="upperRange" value={this.state.upperRange} onChange = {(e) => this.handleInputChange(e,'upperRange')}/>
                        </Col>
                    </FormGroup>


                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" onClick={(event) => this.handleCreate(event)}>Update</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}