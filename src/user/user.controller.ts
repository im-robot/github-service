/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    // 批量导入用户
    @Post('/import')
    async importUsers(@Body('usernames') usernames: string[]) {
        return this.userService.importUsers(usernames);
    }

}
