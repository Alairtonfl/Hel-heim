import { createConnection } from 'typeorm';

createConnection().then(() => console.log('Database is running in port 3306'));
