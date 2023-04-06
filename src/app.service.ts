import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './post/post.entity';
import { Reactions } from './reaction/reaction.entity';
import { Users } from './user/user.entity';
import { USERS, POSTS, REACTIONS, REPORTS } from './seedingDB';
import { CountDTO } from './aux/aux.entities';
import { Reports } from './report/report.entity';

@Injectable()
export class AppService {
    constructor(
        @InjectRepository(Users)
        private readonly userRepository: Repository<Users>,
        @InjectRepository(Posts)
        private readonly postRepository: Repository<Posts>,
        @InjectRepository(Reactions)
        private readonly reactionRepository: Repository<Reactions>,
        @InjectRepository(Reports)
        private readonly reportRepository: Repository<Reports>
    ) { }
    async seedDB() {
        await this.userRepository.save(USERS);
        await this.postRepository.save(POSTS);
        await this.reportRepository.save(REPORTS);
        for (var i = 0; i < REACTIONS.length; i++) {
            Logger.log(`Seeding Reaction ${i}`, 'AppService');
            await this.reactionRepository.save(REACTIONS[i]);
        }
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

    async setupDB() {
        const count = await this.count();
        if (count.users == 0 && count.posts == 0 && count.reactions == 0) {
            Logger.log('Seeding DB', 'AppService');
            await this.seedDB();
        }
        else {
            Logger.log('DB already seeded', 'AppService');
        }
    }
}