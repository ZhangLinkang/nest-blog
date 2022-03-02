import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: '106.52.136.24',
        port: 3306,
        username: 'nest-blog',
        password: 'pya62LXTs4Xz6e7Y',
        database: 'nest-blog',
      });
      sequelize.addModels([User]);
      await sequelize.sync({
        force: true,
      });
      return sequelize;
    },
  },
];
