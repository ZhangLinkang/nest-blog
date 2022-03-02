import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginUser } from 'src/users/dto/login-user.dto';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
@Controller('/api')
export class AuthController {
  constructor(private readonly authService: AuthService) {
    this.authService = authService;
  }
  @ApiTags('登录')
  @HttpCode(200)
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Body() user: LoginUser, @Response() res) {
    // return '!2312';
    return this.authService.login(user, res);
  }
}
