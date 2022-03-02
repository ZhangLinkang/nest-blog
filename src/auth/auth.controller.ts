import {
  Controller,
  HttpCode,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { TokenEntity } from './token.entity';

@Controller('/api')
export class AuthController {
  constructor(private readonly authService: AuthService) {
    this.authService = authService;
  }
  @HttpCode(200)
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() request, @Response() res) {
    // console.log('6666', request);
    return this.authService.login(request.user, res);
  }
}
