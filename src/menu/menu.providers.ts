import { Menu } from './entities/menu.entity';

export const menuProviders = [
  {
    provide: 'MENU_REPOSITORY',
    useValue: Menu,
  },
];
