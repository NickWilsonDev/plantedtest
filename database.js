const pg = require('pg-promise')();

const builder = process.env.USER
const dbconfig = {
    host: 'localhost',
    port: 5432,
    database: 'plantTestDB',
    user: 'ubuntu',
    password: 'digitalcrafts'
    }
const db = pg(dbconfig);



let addData = (time, temp, humidity, ambLight) => {
    return db.query(`INSERT INTO records (time, temperature, humidity, amblight)
                     VALUES ('${time}', '${temp}', '${humidity}', '${ambLight}');`)
};


let getData = () => {
    return db.query(`SELECT * FROM records;`);
};


module.exports = {
    addData,
    getData
}

