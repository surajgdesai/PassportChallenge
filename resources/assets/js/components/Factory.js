import React from 'react';
import axios, {getHeaders} from "../api/AxiosInstance";
import {Glyphicon, Button, Col} from "react-bootstrap";
import ModalContainer from "./Modals/ModalUtility";
import io from 'socket.io-client';

class Factory extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            factoryData: [],
            show: true,
            modalType: "ADD_NODE",
            selectedFactory: "",
            hasError: false
        };

        this.socket = io('http://localhost:8891');

        this.socket.on('add_factory', message => {
            this.setState((prevState) => {
                return {
                    factoryData: prevState.factoryData.concat([JSON.parse(message)])
                }
            });
        });

        this.socket.on('add_factory_nodes', message => {
            var index = this.state.factoryData.findIndex(x => x.id === (JSON.parse(message))['id']);
            this.setState((prevState) => {
                return {
                    factoryData: [
                        ...prevState.factoryData.slice(0, index),
                        Object.assign({}, prevState.factoryData[index], JSON.parse(message)),
                        ...prevState.factoryData.slice(index + 1)
                    ]
                }
            });
        });

        this.socket.on('edit_factory', message => {
            var index = this.state.factoryData.findIndex(x => x.id === (JSON.parse(message))['id']);
            this.setState((prevState) => {
                return {
                    factoryData: [
                        ...prevState.factoryData.slice(0, index),
                        Object.assign({}, prevState.factoryData[index], JSON.parse(message)),
                        ...prevState.factoryData.slice(index + 1)
                    ]
                }
            });
        });

        this.socket.on('delete_factory', message => {
            console.log(message);
            var index = this.state.factoryData.findIndex(x => x.id === message);
            var array = [...this.state.factoryData];
            array.splice(index, 1);
            this.setState({factoryData: array});
        });

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        axios.get('/factory').then((res) => {
            this.setState(() => {
                    return {
                        show: false,
                        factoryData: res.data,
                        hasError: false
                    }
                }
            );
        }).catch((err) => {
                console.log(err);
            }
        );
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    handleEdit(event, factory) {
        event.preventDefault();
        this.setState({
            show: true,
            modalType: "EDIT_NODE",
            selectedFactory: factory
        });
    }

    handleAdd(event, factory) {
        event.preventDefault();
        this.setState({
            show: true,
            modalType: "ADD_NODE",
            selectedFactory: factory
        });
    }

    handleDelete(event, factory) {
        event.preventDefault();
        this.setState({
            show: true,
            modalType: "DELETE_NODE",
            selectedFactory: factory
        });
    }

    render() {

        if (this.state.hasError) {
            return <h1>Loading...</h1>;
        }

        return (
            this.state.factoryData.length > 0 &&
            <ul>
                {this.state.factoryData.map((data, factory_id) =>
                    (
                        <li className={data['children'] ? data['children'].length > 0 ? "container container-with-child" : "container" : "container"}
                            key={factory_id}>
                            <p className="form-inline">
                                <Col lg="3" className="factory-div">
                                    <p className="form-inline child-p">
                                        <Glyphicon className="factory-glyph tree-glyph" glyph={"tree-deciduous"}/>
                                        <h4 className="factory-glyph factory-header">
                                            {data.name}
                                        </h4>
                                    </p>
                                </Col>
                                <Col lg="2">
                                    <span
                                        className="badge badge-primary badge-pill factory-glyph pull-left">{data.lower_range}:{data.upper_range}
                                    </span>
                                </Col>
                                <Col lg="7" className="factory-btn-div">
                                    <p className="form-inline">
                                        <Button className="factory-glyph"
                                                onClick={(event) => this.handleAdd(event, data)}>
                                            <Glyphicon glyph={"plus"}/>
                                        </Button>
                                        <Button className="factory-glyph"
                                                onClick={(event) => this.handleEdit(event, data)}>
                                            <Glyphicon glyph={"pencil"}/>
                                        </Button>
                                        <Button className="factory-glyph"
                                                onClick={(event) => this.handleDelete(event, data)}>
                                            <Glyphicon glyph={"trash"}/>
                                        </Button>
                                    </p>
                                </Col>
                            </p>
                            {
                                data['children'] && data['children'].length > 0 &&
                                <ul>
                                    {data['children'].map((child, node_id) =>
                                        (
                                            <li key={node_id}>
                                                <p className="form-inline">
                                                    <Glyphicon className="child-glyph" glyph="apple"/>
                                                    <p className="nodes">{child.name}</p>
                                                </p>
                                            </li>
                                        )
                                    )}
                                </ul>
                            }
                        </li>)
                )}

                <ModalContainer show={this.state.show} onHide={this.handleClose} currentModal={this.state.modalType}
                                currentFactory={this.state.selectedFactory}/>
            </ul>

        )
    }
}


export default Factory;