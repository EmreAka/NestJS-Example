import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { SignInUserDto } from './dto/signin-user.dto';

@Injectable()
export class AuthService {
    constructor(private jwt: JwtService, private userService: UserService) { }

    async signin(user: SignInUserDto) {
        const data = await this.userService.getByEmail(user.email);

        const crypto = require('crypto');
        //var salt = crypto.randomBytes(128); use this to generate salt.
        const hmac = crypto.createHmac('SHA512', data.PasswordSalt);
        hmac.update(user.password);
        const computedHash: Buffer = hmac.digest();

        if (Buffer.compare(computedHash, data.PasswordHash) === 0) {
            return this.signToken(data.Id, data.Email);
        }
        throw new ForbiddenException("Wrong credentials");
    }

    signup() {
        //TODO: Complete.
    }

    private signToken(userId: number, email: string): Promise<string> {
        const data = { sub: userId, email: email }

        return this.jwt.signAsync(data, {
            expiresIn: '15m',
            secret: 'super-secret', //.env dosyasına taşı
        })
    }
}
