import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>,
    ) { }

    async getAllUsers() {
        return await this.userRepository.createQueryBuilder('user')
            .leftJoinAndSelect('user.posts', 'posts')
            .leftJoinAndSelect('user.reactions', 'reactions')
            .getMany();
    }

    async getReporters() {
        return await this.userRepository.createQueryBuilder('user')
            .leftJoinAndSelect('user.reports', 'reports')
            .getMany();
    }
}
