import {InjectConnection, InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../schemas/user.schema";
import {Connection, Model} from "mongoose";

export class UserService {
    constructor(
        @InjectModel(User.name) private UserModel: Model<UserDocument>,
        @InjectConnection() private connection: Connection,) {
    }


    create(data: User) {
        const user = new this.UserModel(data)
        return user.save()
    }
}