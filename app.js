import express from "express";
import helmet from "helmet";
import router from "./routes/Index.js";

const app = express();
const port = 3000;

app.use(helmet());
app.use('/', router);


app.listen(port, () => { console.log(`Server on port ${port}`)})