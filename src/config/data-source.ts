// src/modules/data-source.ts
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: '51.91.150.152',
  port: 3306,
  username: 'root',
  password: 'loukas30',
  database: 'forum_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
});

export default AppDataSource;
