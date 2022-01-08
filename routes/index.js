const express = require('express');
const router = express.Router();

router.use('/', require('./home/homeRouter'));
router.use('/test', require('./test/testRouter'));
router.use('/admin', require('./admin/adminRouter'));

module.exports = router;