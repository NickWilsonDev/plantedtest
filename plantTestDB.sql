/*
psql -d postgres -f ./db_util.sql ====> creates db and tables
psql -d pc ==========> opens up db in terminal
psql -f [file.sql] -U ubuntu -d [dbname]
*/


DROP DATABASE IF EXISTS planttestdb;
CREATE DATABASE planttestdb;

-- single line comment
/* multi line comment */


\c planttestdb;

-- may have to use larger varchars or text for these fields
CREATE TABLE records (
    ID SERIAL PRIMARY KEY,
    time TEXT,
    temperature TEXT,
    humidity TEXT,
    amblight TEXT
);


