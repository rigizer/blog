const moment = require('moment');

exports.currentDate = () => {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

exports.currentDay = () => {
    return moment().format('YYYY-MM-DD');
}

exports.collectDay = () => {
    return moment().format('YYYYMMDD');
}

exports.currentTime = () => {
    return moment().format('HH:mm:ss');
}