import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './post/post.entity';
import { Reactions } from './reaction/reaction.entity';
import { Users } from './user/user.entity';
import { USERS, POSTS, REACTIONS } from './seedingDB';
import { CountDTO } from './aux/aux.entities';

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>,
        @InjectRepository(Posts)
        private readonly postRepository: Repository<Posts>,
        @InjectRepository(Reactions)
        private readonly reactionRepository: Repository<Reactions>,
    ) { }
    async seedDB() {
        await this.userRepository.save(USERS);
        await this.postRepository.save(POSTS);
        Logger.log('Seeded Users and Posts', 'AppService');
        for (var i = 0; i < REACTIONS.length; i++) {
            Logger.log(`Seeding Reaction ${i}`, 'AppService');
            await this.reactionRepository.save(REACTIONS[i]);
        }
        Logger.log('Seeded Reactions', 'AppService');
    }

    async count(): Promise<CountDTO> {
        const res = new CountDTO();
        const users = await this.userRepository.count();
        res.users = users;
        const posts = await this.postRepository.count();
        res.posts = posts;
        const reactions = await this.reactionRepository.count();
        res.reactions = reactions
        return res;
    }
}