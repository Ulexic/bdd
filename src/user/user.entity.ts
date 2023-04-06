import { Posts } from "src/post/post.entity";
import { Reactions } from "src/reaction/reaction.entity";
import { Reports } from "src/report/report.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column()
    firstname: string;
    @Column()
    lastname: string;
    @Column()
    email: string;

    @OneToMany(() => Posts, post => post.user)
    posts: Posts[];

    @OneToMany(() => Reactions, reaction => reaction.user)
    reactions: Reactions[];

    @OneToMany(() => Reports, reaction => reaction.user)
    reports: Reports[];
}

export class UserDTO {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
}