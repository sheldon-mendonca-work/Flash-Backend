# [Flash - Backend](https://flash-backend-ver1-sheldon-mendoncas-projects.vercel.app)
## [Front-end](https://master--flash-kart.netlify.app/)
This is the back-end for the social media app: Mocha.
This app has been designed using express, Postgres and awt authentication.

## Tech Stack
- Authentication via JWT
- Postgres with Express. 
- PG-Migrations for tracking changes to database; 
- Express server deployed on Vercel.
- Postgres database deployed on Vercel.
- CORS handling.

## Features
- Queries are written in SQL
- One-to-Many and Many-To-Many relationship tables used as per normalization rules.
- SQL injection is taken care of with prepared queries.
- Merging of data of various queries is done in express.
- Snake casing is followed for SQL Tables and Camel casing is followed for ExpressJS as per latest standards.
- Keys from SQL results are parsed and formatted to make it compatible with JS.
- UNIQUE, NOT NULL and DEFAULT checks are done from client, server and database level to ensure data is consistent across all stacks.  
