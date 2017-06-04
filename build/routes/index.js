'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _account = require('./account');

var _account2 = _interopRequireDefault(_account);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* import Your api
import A from './A';
import B from './B';
*/
var router = _express2.default.Router();
router.use('/account', _account2.default);
/* use your api
router.use('/A', A);
router.use('/B', B);
*/
exports.default = router;