'use-strict'

import * as Koa from "koa";
import * as Router from "koa-router";

import * as logger from "koa-logger";
import * as json from "koa-json";
import * as bodyParser from "koa-bodyparser";

import {bootstrapControllers} from "koa-ts-controllers";

const app = new Koa();
const route = new Router();

app.use(json());
app.use(logger());
app.use(bodyParser());
app.use(route.get);

app.use(async (ctx) => {
    ctx.body = {
        status : "Success!",
        message : "Digital Coupon Server Running"
    }
})
app.listen(7000, () => {
    console.log("Digital Coupon server started at port 7000");
})