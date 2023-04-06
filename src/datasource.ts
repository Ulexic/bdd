import { DataSource, DataSourceOptions } from 'typeorm';
import { Posts } from './post/post.entity';
import { Users } from './user/user.entity';
import { Reactions } from './reaction/reaction.entity';

export const options: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'postgres',
    entities: ['dist/**/*.entity.js'],
    synchronize: false,
    migrations: ['dist/db/migration/*.js'],
    migrationsTableName: "migration_table",
};

const dataSource = new DataSource(options);
export default dataSource;

