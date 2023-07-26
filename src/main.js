import express from "express";
import authRoute from "./router/auth.router.js";
import userRouter from "./router/user.router.js";
import './utils/conf.js'

const app = express();


app.use(express.json());
app.use(userRouter)
app.use(authRoute)

app.set("view engine", "ejs"),


app.listen(process.env.PORT, (err) =>
  err
    ? console.log(err.message)
    : console.log("listening on port " + process.env.PORT)
);
