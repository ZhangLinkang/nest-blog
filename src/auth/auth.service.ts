import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { LoginResUser } from 'src/users/dto/login-user.dto';

@Injectable()
export class AuthService {
  private readonly userService: UsersService;
  private readonly jwtService: JwtService;
  constructor(userService: UsersService, jwtService: JwtService) {
    this.userService = userService;
    this.jwtService = jwtService;
  }

  /**
   * validate user name and password
   * @param username
   * @param password
   */
  async validate(username: string, password: string): Promise<any> {
    // console.log(username, password);
    const user = await this.userService.find(username);
    // console.log(user);
    // 注：实际中的密码处理应通过加密措施
    if (user && user.password === password) {
      const { password, ...userInfo } = user;
      return userInfo;
    } else {
      return null;
    }
  }

  /**
   * user login
   * @param user
   */
  async login(user: any): Promise<any> {
    const { id, phone } = user;
    const toekn = this.jwtService.sign({ phone: phone, id: id });
    return {
      token: toekn,
      // user:user._,
      ...user,
      status: 'ok',
      type: 'account',
      currentAuthority: 'admin',
    };
  }
}
