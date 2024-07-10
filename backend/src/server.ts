import { app } from "./app";
import dotenv from "dotenv";
dotenv.config();

app.listen(4000, () => console.log("listening on port 4000"));
