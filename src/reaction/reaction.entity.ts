import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reaction {
    @PrimaryGeneratedColumn({ name: "user_id" })
    userId: number;
    @PrimaryGeneratedColumn({ name: "post_id" })
    postId: number;
    @Column({ name: "user_id" })
    type: ReactionType;
}

export class ReactionDTO {
    userId: number;
    postId: number;
    type: ReactionType;
}

enum ReactionType {
    LIKE = "LIKE",
    DISLIKE = "DISLIKE"
}