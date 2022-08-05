/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async importUsers(usernames: string[]) {
        const users = []
        for (const username of usernames) {
            let user = new User()
            user.username = username
            user.password = 'li980819'
            user.email = `${username}@githubmail.com`
            user.isRegisted = false
            users.push(user)
        }
        return this.userRepository.save(users)
    }
}
