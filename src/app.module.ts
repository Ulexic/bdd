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
import { ReportModule } from './report/report.module';
import { Reports } from './report/report.entity';

@Module({
    imports: [TypeOrmModule.forRoot(options),
    TypeOrmModule.forFeature([Users, Posts, Reactions, Reports]),
        ReactionModule, PostModule, UserModule, ReportModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
