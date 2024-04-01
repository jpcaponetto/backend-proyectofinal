import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import handlebars from "express-handlebars";
import { envi } from "./env.js";
import { __dirname } from "./path.js";
import apiRoutes from "./routes/api/index.routes.js";
import passport from "passport";
import { InitPassport } from "./config/passport.js";
import { errorHandling } from "./utils/globalErrorHandling.js";
import viewRoutes from "./routes/views/index.routes.js";
const { secret } = envi.cookie;
const app = express();
const secretcookie = process.env.SK || secret;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(secretcookie));

app.use(express.static(path.join(__dirname, "../public")));

app.engine("handlebars", handlebars.engine());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

InitPassport();
app.use(passport.initialize());
app.use("/api", apiRoutes);

// app.get("/", (req, res) => {
//   res.render("welcome");
// });

app.use("/", viewRoutes);
app.use(errorHandling);
export default app;
