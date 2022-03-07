import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(){
        super({
            //Se recibe el token mediante Header
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }
    
    //payload = { username: user.username, sub: user.userId };
    //const payload = { id: user.id, name: user.name, };
    async validate(payload: any){
    return { Id: payload.id, name: payload.name };
    }
}
