import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiHeader, ApiQuery } from '@nestjs/swagger';
import { JwtModule } from '@nestjs/jwt';
import { CurrentUser } from 'src/users/users.decorator';
import { User } from 'src/users/entities/user.entity';
import { LoginResUser } from 'src/users/dto/login-user.dto';
import { use } from 'passport';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}
  @ApiHeader({
    name: 'token',
    example: 'e10adc3949ba59abbe56e057f20f883e',
  })
  @UseGuards(AuthGuard('jwt'))
  @Post('add')
  create(@Body() createMenuDto: CreateMenuDto, @CurrentUser() user) {
    // console.log(user, createMenuDto, '22');
    return this.menuService.create({
      ...createMenuDto,
      createId: user.id,
      updateId: user.id,
    });
  }
  @ApiQuery({
    name: 'pageNum',
    description: '条数',
  })
  @ApiQuery({
    name: 'current',
    description: '当前页',
  })
  @ApiQuery({
    name: 'keyWords',
    description: '当前页',
  })
  @Get()
  findAll(@Query() params: PageQuery & { keyWords: string }) {
    return this.menuService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  @Patch()
  update(@Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(updateMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }
}
