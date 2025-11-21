import {Router}  from "express";
import {getUser, getUsers} from "../controller/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id",authorize, getUser);

userRouter.post("/", (request , response) =>{
    response.send({title: "CREATE new user"});
});

userRouter.put("/:id", (request , response) =>{
    response.send({title: "UPDATE users"});
});

userRouter.delete("/:id", (request , response) =>{
    response.send({title: "DELETE user"});
});

export default userRouter;