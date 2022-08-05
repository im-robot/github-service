import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mi.lidede.com',
      port: 3306,
      username: 'root',
      password: 'li980819',
      database: 'github-account',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
