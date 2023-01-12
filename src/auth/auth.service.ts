import {Injectable} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {UserService} from '../users/user.service';
import {InjectConnection, InjectModel} from "@nestjs/mongoose";
import {Book, BookDocument} from "../schemas/book.schema";
import {Connection, Model} from "mongoose";
import {User, UserDocument} from "../schemas/user.schema";

@Injectable()
export class AuthService {
    constructor(private usersService: UserService, private jwtService: JwtService,
                @InjectModel(User.name) private UserModel: Model<UserDocument>,
                @InjectConnection() private connection: Connection,) {
    }

    async validateUser(id: number): Promise<any> {
        const user = await this.UserModel.findOne({_id: id});
        if (user) {
            return user;
        }
        return null;
    }

    createToken(payload: any) {
        return this.jwtService.sign(payload);
    }
}