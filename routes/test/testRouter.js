const express = require('express');
const router = express.Router();

const executeQuery = require('../../config/db/DbConnect').executeQuery;
const query = require('../../config/db/Query').query;

// ERROR: await is only valid in async functions and the top level bodies of modules
// https://codingmania.tistory.com/552 참고

router.get('/', async (req, res) => {
    let sql = query.SELECT_MWS_TEST;
    let args = [];
    
    let result = await executeQuery(sql, args, (err, result) => {
        if (err) {
            console.log('QUERY ERROR: ' + err);
            res.end();
        }
    });
    
    let model = {};
    model.test = result;
    res.render('test/main', {model: model});
});

router.get('/bootstrapTest', (req, res) => {
    res.render('test/bootstrapTest');
});

module.exports = router;