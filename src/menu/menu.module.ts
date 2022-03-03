import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { Menu } from './entities/menu.entity';
import { menuProviders } from './menu.providers';

@Module({
  imports: [Menu],
  controllers: [MenuController],
  providers: [MenuService, ...menuProviders],
})
export class MenuModule {}
