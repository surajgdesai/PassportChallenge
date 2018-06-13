'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getHeaders = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AxiosInstance = _axios2.default.create({
    baseURL: window.Laravel.base_url,
    timeout: 8000,
    headers: { 'X-CSRF-TOKEN': window.Laravel.csrfToken, 'X-Requested-With': 'XMLHttpRequest' }
});

var getHeaders = exports.getHeaders = function getHeaders() {
    return { Accept: "application/json" };
};

exports.default = AxiosInstance;
//# sourceMappingURL=AxiosInstance.js.map