import { Inject, Injectable } from '@nestjs/common';

import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    // private jwtService,
    @Inject('USER_REPOSITORY') private userRepository: typeof User,
  ) {}
  async find(username: string) {
    return this.userRepository.findOne({
      where: {
        phone: username,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
