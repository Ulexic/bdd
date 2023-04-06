import { Module } from '@nestjs/common';
import { ReactionService } from './reaction.service';
import { ReactionController } from './reaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reactions } from './reaction.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Reactions])],
    controllers: [ReactionController],
    providers: [ReactionService]
})
export class ReactionModule { }
