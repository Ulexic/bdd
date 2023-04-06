import { Posts } from "src/post/post.entity";
import { Users } from "src/user/user.entity";
import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class Reports {
    @PrimaryColumn({ name: "user_id" })
    userId: number;
    @PrimaryColumn({ name: "post_id" })
    postId: number;
    @Column()
    reason: string;

    @ManyToOne(() => Users, user => user.reactions)
    @JoinColumn({ name: "user_id" })
    user: Users;

    @ManyToOne(() => Posts, post => post.reactions)
    @JoinColumn({ name: "post_id" })
    post: Posts;
}

export class ReportDTO {
    userId: number;
    postId: number;
    reason: string;
}