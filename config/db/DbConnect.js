const mysql = require('mysql');
const config = require('./DbConfig.json');

const pool = mysql.createPool(config);

pool.on('acquire', function(conn) {
    console.info('Connection pool %d created', conn.threadId);
});

pool.on('enqueue', function() {
    console.info('Waiting for available connection slot');
});

pool.on('release', function(conn) {
    console.info('Connection pool %d released', conn.threadId);
});

const getConn = function(callback) {
    pool.getConnection(function(err, conn) {
        callback(err, conn);
    });
};

exports.executeQuery = function(sql, args) {
    return new Promise((resolve, reject) => {
        getConn((err, conn) => {
            if (err) {
                switch (err.code) {
                case "PROTOCOL_CONNECTION_LOST":
                    console.error("Database connection was closed.");
                    break;
                case "ER_CON_COUNT_ERROR":
                    console.error("Database has too many connections.");
                    break;
                case "ECONNREFUSED":
                    console.error("Database connection was refused.");
                    break;
                default:
                    console.error("UNKNOWN ERROR!");
                    break;
                }
    
                throw err;
            }
    
            conn.query(sql, args, (err, rows) => {
                conn.release();
    
                if (err) {
                    console.error(err);
                    throw err;
                } else {
                    return resolve(rows);
                }
            });
        });
    });
};