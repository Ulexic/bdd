import { Body, Controller, Get, Logger, Param, ParseIntPipe, Patch, Post, Res } from '@nestjs/common';
import { PostDTO } from './post.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) { }

    @Post("/")
    async createPost(
        @Res() response,
        @Body() body: PostDTO
    ) {
        try {
            const res = await this.postService.createPost(body);
            response.status(201).header('Location', `http://localhost:3001/post/${res.id}`).send();
        } catch (e) {
            response.status(400).send(e.detail);
        }
    }


    @Get('/all')
    async getAllPosts(
        @Res() response
    ) {
        response.status(200).send(await this.postService.getAllPosts());
    }

    @Get('/:id')
    async getPosts(
        @Param('id', ParseIntPipe) id: number,
        @Res() response
    ) {
        const res = await this.postService.getPosts(id);
        if (!res) {
            return response.status(404).send();
        }
        response.status(200).send(res);
    }

    @Patch('/:id')
    async modifyPost(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: PostDTO,
        @Res() response
    ) {
        if (!body || body.content === null || body.userId === undefined) {
            return response.status(400).send('Body is empty');
        }
        try {
            const res = await this.postService.modifyPost(id, body);
            response.status(200).send();
        } catch (e) {
            response.status(400).send(e);
        }
    }
}
