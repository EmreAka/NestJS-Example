import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { BrandModule } from './brand/brand.module';
import { Brand } from './brand/entity/brand.entity';
import { User } from './user/entity/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-34-193-44-192.compute-1.amazonaws.com',
      port: 5432,
      username: 'uwpkbjbqbpvzpk',
      password: '1244f11f68752a35661d65ccdef6fc3151300144e7ad334924bcfd4782be10ac',
      database: 'ddfguc2hsbo83g',
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
