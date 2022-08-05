import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
    controllers: [
        UserController,],
    providers: [
        UserService,],
})
export class UserModule { }
