import { Controller, Body, Patch, Request, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CurrentUser } from './users.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiHeader } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @UseGuards(AuthGuard('jwt'))
  @ApiHeader({
    name: 'token',
    required: true,
    description: '用户token'
  })
  @Patch()
  update(@Body() body: UpdateUserDto, @CurrentUser() user) {
    return this.usersService.update(user.id, body);
  }
}
