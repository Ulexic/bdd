import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReactionModule } from './reaction/reaction.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user/user.entity';
import { Reactions } from './reaction/reaction.entity';
import { Posts } from './post/post.entity';
import dataSource, { options } from './datasource';

@Module({
    imports: [TypeOrmModule.forRoot(options),
    TypeOrmModule.forFeature([Users, Posts, Reactions]),
        ReactionModule, PostModule, UserModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
