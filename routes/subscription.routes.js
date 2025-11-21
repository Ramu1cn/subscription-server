import {Router} from "express";
import authorize from "../middleware/auth.middleware.js";
import {createSubscription} from "../controller/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/" , (request , response)=>{
    response.send({title: "GET all subscriptions"});
});

subscriptionRouter.get("/:id" , (request , response)=>{
    response.send({title: "GET subscription details"});
});

subscriptionRouter.post("/" ,authorize, createSubscription);

subscriptionRouter.put("/:id" , (request , response)=>{
    response.send({title: "UPDATE subscriptions"});
});

subscriptionRouter.delete("/:id" , (request , response)=>{
    response.send({title: "DELETE subscriptions"});
});

subscriptionRouter.get("/user/:id" , (request , response)=>{
    response.send({title: "GET all user subscriptions"});
});

subscriptionRouter.put("/:id/cancel" , (request , response)=>{
    response.send({title: "CANCEL  subscriptions"});
});

subscriptionRouter.get("/upcoming-renewals" , (request , response)=>{
    response.send({title: "GET upcoming subscriptions"});
});

export default subscriptionRouter;