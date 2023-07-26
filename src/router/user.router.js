import { Router } from "express"
import Io from "../helper/Io.js";


const dtList = new Io("D:/beckend/15/db/list.json");
const lists = await dtList.read();
const dtJob = new Io("D:/beckend/15/db/jobs.json");
const jobs = await dtJob.read();
const userRouter = Router()

userRouter.get("/users",(req, res) => {
    try {
      res.render("list", { jobs, lists });
    } catch (error) {
      console.log(error.message);
    }
  });

export default userRouter