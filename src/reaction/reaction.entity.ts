import { Posts } from "src/post/post.entity";
import { Users } from "src/user/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";


export enum ReactionType {
    LIKE = 'LIKE',
    DISLIKE = 'DISLIKE'
}

@Entity()
export class Reactions {
    @PrimaryColumn({ name: "user_id" })
    userId: number;
    @PrimaryColumn({ name: "post_id" })
    postId: number;
    @Column({ type: "enum", enum: ReactionType })
    type: ReactionType;

    @ManyToOne(() => Users, user => user.reactions)
    @JoinColumn({ name: "user_id" })
    user: Users;

    @ManyToOne(() => Posts, post => post.reactions)
    @JoinColumn({ name: "post_id" })
    post: Posts;
}

export class ReactionDTO {
    userId: number;
    postId: number;
    type: ReactionType;
}

