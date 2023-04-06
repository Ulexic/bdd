import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    content: string;
    @Column({ name: "user_id" })
    userId: number;
}

export class PostDTO {
    content: string;
    userId: number;
}