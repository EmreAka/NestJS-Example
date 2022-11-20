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
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: [Brand, User],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      }
    }),
    BrandModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
