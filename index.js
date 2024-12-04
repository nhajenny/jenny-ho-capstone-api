import "dotenv/config";
import express from "express";
import cors from "cors";


const app = express();


const { PORT, CORS_ORIGIN } = process.env;


app.use(cors({
    origin: CORS_ORIGIN || "*", 
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type, Authorization"
}));


app.use(express.json());


import festivalRoutes from './routes/festival-routes.js';
import ticketRoutes from "./routes/tickets-routes.js";
import hotelRoutes from "./routes/hotels-routes.js";
import commentRoutes from "./routes/comments-routes.js";
import tipsRoutes from "./routes/tips-routes.js";

app.use("/api/festivals", festivalRoutes); 
app.use("/api/tickets", ticketRoutes);    
app.use("/api/hotels", hotelRoutes);      
app.use("/api/festivals", commentRoutes); 
app.use("/api/tips", tipsRoutes);        

// Server setup
if (!PORT) {
    console.error("Error: PORT is not defined in environment variables.");
    process.exit(1);
}

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
    console.log("Press CTRL + C to stop server");
});
