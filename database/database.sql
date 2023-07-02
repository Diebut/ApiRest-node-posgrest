CREATE DATABASE Nodejs_PG;

CREATE Table users(
    id serial PRIMARY KEY,
    name varchar (40),
    email TEXT
);