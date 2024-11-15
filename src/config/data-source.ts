// src/modules/data-source.ts
import { DataSource } from 'typeorm';
import { Users } from './users/users.entity';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: '51.91.150.152',
  port: 3306,
  username: 'root',
  password: 'loukas30',
  database: 'forum_db',
  entities: [Users],
  migrations: ['dist/src/migrations/*.js'],
  synchronize: true, // set to false for production
});

export default AppDataSource;
