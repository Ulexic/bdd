import { Body, Controller, Get, Param, ParseIntPipe, Post, Res } from '@nestjs/common';
import { ReactionDTO } from './reaction.entity';
import { ReactionService } from './reaction.service';

@Controller('reaction')
export class ReactionController {
    constructor(private readonly reactionService: ReactionService) { }

    @Post('/')
    async createReaction(
        @Res() response,
        @Body() body: ReactionDTO
    ) {
        try {
            const res = await this.reactionService.createReaction(body);
            response.status(201).header('Location', `http://localhost:3001/reaction/post/${res.postId}/user/${res.userId}`).send();
        } catch (e) {
            response.status(400).send(e.detail);
        }
    }

    @Get('/post/:postId/user/:userId')
    async getReaction(
        @Res() response,
        @Param('postId', ParseIntPipe) postId: number,
        @Param('userId', ParseIntPipe) userId: number
    ) {
        const res = await this.reactionService.getReaction(postId, userId);
        if (!res) {
            return response.status(404).send();
        }
        response.status(200).send(res);
    }
}