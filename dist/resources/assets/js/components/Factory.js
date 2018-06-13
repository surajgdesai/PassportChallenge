'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AxiosInstance = require('../api/AxiosInstance');

var _AxiosInstance2 = _interopRequireDefault(_AxiosInstance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import React, {Component} from 'react';
// import {FormGroup, Glyphicon} from 'react-bootstrap';
//
//
// export default class Factory extends React.Component {
//     constructor(props) {
//         super(props);
//         /*this.handleShow = this.handleShow.bind(this);
//         this.handleClose = this.handleClose.bind(this);
//         this.handleDelete = this.handleDelete.bind(this);*/
//         this.state = {
//             factoryData: []
//         }
//     }
//
//     componentDidMount() {
//         axios.get('/factory').then( (res) => {
//             console.log(res.data);
//             // const factoryData = res.data;
//             // console.log(factoryData);
//             // console.log(JSON.stringify(factory));
//                 localStorage.setItem("parentdata", JSON.stringify(res.data));
//             });
//     };
//
//     componentWillUnmount() {
//         this._source.cancel( 'Operation canceled due component being unmounted.' )
//     }
// /*
//     handleClose() {
//         this.setState({show: false});
//     }
//
//     handleShow(e, data) {
//         this.setState({
//             show: true,
//             clickedModal: e.target.id,
//             nodeData: data
//
//         }, () => console.log(this.state));
//     }
//
//     handleDelete(e, pid) {
//         e.preventDefault();
//         let self = this;
//         alert("deleted child nodes");
//         var apiBaseUrl = "https://morning-bastion-28946.herokuapp.com/api/";
//         var payload = {
//             "id": pid
//         }
//
//         axios.post(apiBaseUrl + 'deleteFactory', payload)
//             .then(function (response) {
//                 console.log(response);
//                 self.setState({
//                     factoryData: response
//                 })
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }*/
//
//     render() {
//
//         // let dataFactory = JSON.parse(localStorage.getItem("parentdata"));
//
//         return (
//
//
//             <div>
//                 Hello!
//             </div>
//         );
//     }
// }

var Factory = function (_React$Component) {
    _inherits(Factory, _React$Component);

    function Factory(props) {
        _classCallCheck(this, Factory);

        var _this = _possibleConstructorReturn(this, (Factory.__proto__ || Object.getPrototypeOf(Factory)).call(this, props));

        _this.state = {
            factoryData: [],
            show: true
        };

        return _this;
    }

    _createClass(Factory, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _AxiosInstance2.default.get('/factory').then(function (res) {
                // const factoryData = res.data;
                // const factoryData = res.data;
                // console.log(factoryData);
                // console.log(JSON.stringify(factory));
                localStorage.setItem("parentdata", JSON.stringify(res.data));
                // this.setState({show:false});
            });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(localStorage.getItem("parentdata"));
            return {/*<div>
                       Hello!
                    </div>*/};
        }
    }]);

    return Factory;
}(_react2.default.Component);

exports.default = Factory;
//# sourceMappingURL=Factory.js.map