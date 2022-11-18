import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInUserDto } from './dto/signin-user.dto';

@Controller('auth')
export class AuthController {
    /**
     *
     */
    constructor(private authService: AuthService) { }

    @Post("signin")
    async signin(@Body() credentials: SignInUserDto) {
        const data = await this.authService.signin(credentials)
        return { jwt: data };
    }
}
