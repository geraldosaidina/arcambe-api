import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/UserRoutes";
import advertisementRouter from "./routes/AdvertisementRoutes";
import locationRouter from "./routes/LocationRoutes";
import messageRouter from "./routes/MessageRoutes";
import paymentRouter from "./routes/PaymentRoutes";
import transactionRouter from "./routes/TransactionRoutes";
import wasteRouter from "./routes/WasteRoutes";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const BASE_API_URL = "/api/v1"

app.use(cors());
app.use(express.json());

// API Routes
app.use(BASE_API_URL, userRouter);
app.use(BASE_API_URL, advertisementRouter);
app.use(BASE_API_URL, locationRouter);
app.use(BASE_API_URL, messageRouter);
app.use(BASE_API_URL, paymentRouter);
app.use(BASE_API_URL, transactionRouter);
app.use(BASE_API_URL, wasteRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

