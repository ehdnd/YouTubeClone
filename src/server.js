import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const loggerMiddleware = morgan("dev");

const handleHome = (req, res) => {
    return res.send("HI !");
}

app.use(loggerMiddleware);
app.get("/", handleHome);

const handleListening = () => console.log(`✅ Server listening on port http://localhost${PORT} 🚀`)

app.listen(PORT, handleListening);