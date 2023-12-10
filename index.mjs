import dotenv from 'dotenv';
import express, { Router } from 'express';
import cors from 'cors';
import path from 'path';
import { router as addressRoutes } from './src/routes/AddressRoutes.js';
import { router as authRoutes } from './src/routes/AuthRoutes.js';
import { router as productRoutes } from './src/routes/ProductRoutes.js';
import { router as cartRoutes } from './src/routes/CartRoutes.js';
import { router as categoryRoutes } from './src/routes/CategoryRoutes.js';
import { router as wishlistRoutes } from './src/routes/WishlistRoutes.js';
import ExpressError from './error/ExpressError.js';
import pkg from 'pg';

/* Postgres connection */
dotenv.config();


/* app initialization */
const app = express();
const { Pool } = pkg;
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
});

app.get("/hello", (req, res, next) => {
    res.status(200).send("Hello.")
})

app.all('*', async (req, res, next) => {
    next(new ExpressError(404, "Page not Found"));
  })
  
app.use((err, req, res, next) => {
    const { message = "Something went wrong.", statusCode = 500 } = err;
    res.status(statusCode).json({ error: message });
});

const PORT = process.env.PORT || 3005;
app.listen(process.env.PORT, () => console.log("Server is running on port 5000"))


const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

pool.connect((err) => {
    if (err) throw err
    console.log("Connect to PostgreSQL successfully!")
})