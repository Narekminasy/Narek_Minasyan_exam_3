// import DBMysql from "./clients/db.mysql.js";

import './clients/db.sequelize.js';

;(async () => {
    console.log('running connection...');
    // await DBMysql.query(`
    //     create table if not exists users
    //     (
    //         id  bigint primary key auto_increment,
    //         name varchar(20),
    //         age int,
    //         email varchar(255),
    //         password varchar(255)
    //     );
    //  `);
    // console.log('--> user table successfully created!');
})();