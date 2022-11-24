import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { BrandModule } from './brand/brand.module';
import { Brand } from './brand/entity/brand.entity';
import { User } from './user/entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.LOCAL_DATABASE_HOST,
      port: +process.env.LOCAL_DATABASE_PORT,
      username: process.env.LOCAL_DATABASE_USERNAME,
      password: process.env.LOCAL_DATABASE_PASSWORD,
      database: process.env.LOCAL_DATABASE_DATABASE,
      entities: [Brand, User],
      synchronize: true,
      // ssl: {
      //   rejectUnauthorized: false,
      // }
    }),
    BrandModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
