import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
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
}

export class UserDTO {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
}