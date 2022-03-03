import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { LoginResUser } from 'src/users/dto/login-user.dto';
import { returnValue } from 'src/shared/returnValue';

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
    console.log(user);
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
    // console.log(user);

    const { username, password } = user;
    const { dataValues }: any = await this.validate(username, password);
    // console.log(userInfo);
    // const { userInfo } = dataValues;
    const toekn = this.jwtService.sign(dataValues);
    return returnValue({
      data: {
        token: toekn,
        ...dataValues,
        password: null,
      },
    });
  }
}
