import { Exclude } from "class-transformer";
import { Reactions } from "src/reaction/reaction.entity";
import { Users } from "src/user/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";


@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    content: string;
    @Column({ name: "user_id" })
    userId: number;

    @ManyToOne(() => Users, user => user.posts)
    @JoinColumn({ name: "user_id" })
    user: Users;

    @OneToMany(() => Reactions, reaction => reaction.post)
    reactions: Reactions[];

}

export class PostDTO {
    content: string;
    userId: number;
}

export class PostWithReactions {
    id: number;
    content: string;
    userId: number;
    reactions: Reactions[];
}