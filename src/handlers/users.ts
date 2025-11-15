import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/respnse";

export function getUsers(request: Request, response: Response){
    response.send("Users ro'yxati"+ Math.random()+" "+Date.now()+""+new Date().toISOString()+""+new Date().toUTCString()+""+new Date().toDateString() +""+new Date().toTimeString()+""+new Date().toLocaleDateString()+""+new Date().toLocaleTimeString()+""+new Date().toLocaleString()+""+new Date().getFullYear()+""+new Date().getMonth()+""+new Date().getDate()+""+new Date().getHours()+""+new Date().getMinutes()+""+new Date().getSeconds()+""+new Date().getMilliseconds()+""+new Date().getTime()+""+new Date().getTimezoneOffset()+""+new Date().getDay()+""+new Date().toISOString()+""+new Date().toUTCString()+""+new Date().toDateString()+""+new Date().toTimeString()+""+new Date().toLocaleDateString()+""+new Date().toLocaleTimeString()+""+new Date().toLocaleString()+""+new Date().getFullYear()+""+new Date().getMonth()+""+new Date().getDate()+""+new Date().getHours()+""+new Date().getMinutes()+""+new Date().getSeconds()+""+new Date().getMilliseconds()+""+new Date().getTime()+""+new Date().getTimezoneOffset()+""+new Date().getDay());
}

export function getUserById(request: Request, response: Response){
    response.send({});
}

export function createUser(request: Request<{},{}, CreateUserDto, CreateUserQueryParams>, 
    response: Response<User>
    ){
    // request.query.loginAfterCreate;

    return response.status(201).send({
        id:1,
        username: "Jhon",
        email: "ab@gmail.com"
    })
}