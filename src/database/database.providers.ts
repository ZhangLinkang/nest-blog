import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/users/entities/user.entity';
import * as sequelize from 'sequelize';
import moment from 'moment';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    createdAt: {
      type: sequelize.DATE,
      get() {
        return moment(this.getDataValue('createdAt')).format(
          'YYYY-MM-DD HH:mm:ss',
        );
      },
    },
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: '106.52.136.24',
        port: 3306,
        username: 'nest-blog',
        password: 'pya62LXTs4Xz6e7Y',
        database: 'nest-blog',
        define: {
          timestamps: true,
          createdAt: true, //自定义时间戳
          updatedAt: true, // 自定义时间戳
          deletedAt: true,
        },
        timezone: '+08:00', //东八时区
      });
      sequelize.addModels([User]);
      await sequelize.sync({
        // force: true,
        alter: true,
      });
      return sequelize;
    },
  },
];
