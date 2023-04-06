import { MigrationInterface, QueryRunner } from "typeorm";

export class AddReports1680792755142 implements MigrationInterface {
    name = 'AddReports1680792755142'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`create table reports(reason varchar(50), post_id int, user_id int, foreign key (user_id) references "users"(id) on update cascade on delete cascade, foreign key (post_id) references "posts"(id) on update cascade on delete cascade, primary key (post_id, user_id));`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`drop table reports;`);
    }

}
