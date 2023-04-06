import { Module, Post } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReactionModule } from './reaction/reaction.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Reaction } from './reaction/reaction.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 3306,
    username: 'postgres',
    password: '1234',
    database: 'postgres',
    entities: [Post, User, Reaction],
    synchronize: false,
  }), ReactionModule, PostModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
