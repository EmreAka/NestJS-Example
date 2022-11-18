import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [JwtModule.register({}), UserModule]
})
export class AuthModule { }
