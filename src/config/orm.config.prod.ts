import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Customer } from 'src/database/entities/customer.entity';

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'prova123.',
    database: 'pizza-back',
    entities: [Customer],
    synchronize: false, // Disable this always in production
  }),
);