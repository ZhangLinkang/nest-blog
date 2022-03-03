import { Module } from '@nestjs/common';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
import { FileModule } from './file/file.module';
@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule,
    FileModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../html'),
    }),
    MenuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
