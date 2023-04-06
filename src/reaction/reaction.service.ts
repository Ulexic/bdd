import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReactionDTO, Reactions } from './reaction.entity';

@Injectable()
export class ReactionService {
    constructor(
        @InjectRepository(Reactions)
        private readonly reactionRepository: Repository<Reactions>,
    ) { }

    async createReaction(reaction: ReactionDTO) {
        try {
            return this.reactionRepository.save(reaction);
        } catch (e) {
            Promise.reject(e);
        }
    }

    async getReaction(postId: number, userId: number) {
        return this.reactionRepository.findOne({ where: { postId: postId, userId: userId } });
    }
}
