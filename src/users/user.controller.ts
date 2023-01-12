import {Body, Controller, Get, Post, UseGuards} from "@nestjs/common";
import {UserService} from "./user.service";
import {User} from "../interfaces/user.interface";
import {AuthGuard} from "@nestjs/passport";
import {JwtAuthGuard} from "../auth/jwt.auth.guard";
import { AuthService} from "../auth/auth.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService,private readonly authService: AuthService) {
    }
@Post('/register')
register(@Body() body: User) {
    return body;
}
@Get('/token')
getToken(id):string{
        return this.authService.createToken({id:id})
}
@UseGuards(JwtAuthGuard)
@Post('/login')
login(@Body() body: User) {
    return body;
}
}