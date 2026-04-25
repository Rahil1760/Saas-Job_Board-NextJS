import Cors from "cors";

// Allow your Vite frontend
export const cors = Cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // ✅ IMPORTANT for cookies
});