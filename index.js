import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();

const { DB_PORT, CORS_ORIGIN } = process.env;

app.use(cors({ origin: CORS_ORIGIN, 
        methods: "GET,POST,PUT,DELETE,OPTIONS",
        allowedHeaders: "Content-Type, Authorization"
        }));

app.use(express.json());

// All festival routes
import festivalRoutes from './routes/festival-routes.js';
app.use("api/festivals", festivalRoutes);

// All ticket routes 
import ticketRoutes from "./routes/tickets-routes.js";
app.use("/api/tickets", ticketRoutes);

//All hotel routes 
import hotelRoutes from "./routes/hotels-routes.js";
app.use("/api/hotels", hotelRoutes);

// All comments routes 
import commentRoutes from "./routes/comments-routes.js";
app.use("/api/festivals", commentRoutes);

// All tips routes
import tipsRoutes from "./routes/tips-routes.js";
app.use("/api/tips", tipsRoutes);


// Server setup
app.listen(DB_PORT, () => {
    console.log(`Server is listening at http://localhost:${DB_PORT}`);
    console.log("Press CTRL + C or CMD + C to stop server");
});
