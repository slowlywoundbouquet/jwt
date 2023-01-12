import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthService} from "./auth.service";
import { jwtConstants } from './constans';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtConstants.secret
        });
    }

    public async validate(payload: any) {
        const user = await this.authService.validateUser(payload.id);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}