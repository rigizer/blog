const moment = require('moment');

exports.currentDate = function() {
    const today = moment().format('YYYY-MM-DD HH:mm:ss');
    return today;
}

exports.currentDay = function() {
    const today = moment().format('YYYY-MM-DD');
    return today;
}

exports.collectDay = function() {
    const today = moment().format('YYYYMMDD');
    return today;
}

exports.currentTime = function() {
    const time = moment().format('HH:mm:ss');
    return time;
}