import {Controller, Ctx, Req, Body, Get, Post, Delete, IsString, IsNumber} from 'koa-ts-controllers';

@Controller("/user")
export class UsersController {

    @Get("/")
    public async getUser(){
        return "hey";
    }
}