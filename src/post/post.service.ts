import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { PostDTO, Posts, PostWithReactions } from './post.entity';

@Injectable()
export class PostService {

    constructor(
        @InjectRepository(Posts)
        private readonly postRepository: Repository<Posts>,
    ) { }

    createPost(post: PostDTO) {
        try {
            return this.postRepository.save(post);
        } catch (e) {
            Promise.reject(e);
        }
    }

    async getPosts(id: number): Promise<Posts> {
        const post = await this.postRepository.findOneBy({ id: id });
        return post;
    }

    async modifyPost(id: number, post: PostDTO) {
        const res = await this.postRepository.findOneBy({ id: id });
        if (!res) {
            return Promise.reject('Post not found');
        }

        Logger.log(res.userId);

        if (res.userId !== post.userId) {
            return Promise.reject('User id does not match');
        }

        return this.postRepository.update({ id: id }, post);
    }

    async getAllPosts() {
        const posts = await this.postRepository.createQueryBuilder('post')
            .leftJoinAndSelect('post.reactions', 'reactions')
            .getMany();
        return posts;
    }
}
