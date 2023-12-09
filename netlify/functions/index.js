import dotenv from 'dotenv';
import express, { Router } from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import path from 'path';
import pool from '../../src/pool/pool.js';

import { router as addressRoutes } from '../../src/routes/AddressRoutes.js';
import { router as authRoutes } from '../../src/routes/AuthRoutes.js';
import { router as productRoutes } from '../../src/routes/ProductRoutes.js';
import { router as cartRoutes } from '../../src/routes/CartRoutes.js';
import { router as categoryRoutes } from '../../src/routes/CategoryRoutes.js';
import { router as wishlistRoutes } from '../../src/routes/WishlistRoutes.js';
import ExpressError from '../../error/ExpressError.js';

/* Postgres connection */
dotenv.config({path: path.join(path.resolve(), '../../.env')});


/* app initialization */
const app = express();
const port = 3001;
/* Express Routing */
// const allowCrossDomain = (req, res, next) => {
//     res.header(`Access-Control-Allow-Origin`, `*`);
//     res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
//     res.header(`Access-Control-Allow-Headers`, `Content-Type, authorization`);
//     next();
//   };
app.use(cors({
    origin: "*",
    methods: ['GET', 'PUT', "DELETE", "POST"],
    credentials: true
}));
// app.use(allowCrossDomain)
const router = Router();


// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/user/address", addressRoutes);
app.use("/api/user/cart", cartRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/user/wishlist", wishlistRoutes);

app.get("/", (req, res, next) => {
    res.status(200).send("Welcome to flash backend.")
})

app.all('*', async (req, res, next) => {
    next(new ExpressError(404, "Page not Found"));
  })
  
app.use((err, req, res, next) => {
    const { message = "Something went wrong.", statusCode = 500 } = err;
    res.status(statusCode).json({ error: message });
});

try {
    const poolConnectResponse = await pool.connect({
        host: 'localhost',
        port: 5432,
        database: 'flashBackend',
        user: 'postgres',
        password: 'postgres'
    }); 
    
} catch (error) {
    console.error(error);
}


export const handler = serverless(app);