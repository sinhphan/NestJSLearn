import { join } from 'path';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'sinh',
  password: 'SinhLAa3@',
  database: 'fpt_shop',
  entities: [join(__dirname, '../modules/**/*.entity{.js,.ts}')],
  migrationsRun: true,
  migrations: [join(__dirname, '../migration/*{.ts,.js}')],
});

dataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized successfully.');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });

export default dataSource;
