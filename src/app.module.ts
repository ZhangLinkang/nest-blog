import { Module } from '@nestjs/common';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../html'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
