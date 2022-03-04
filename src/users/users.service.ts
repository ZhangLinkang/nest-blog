import { Inject, Injectable } from '@nestjs/common';
import Sequelize from 'sequelize';
import { returnValue } from 'src/shared';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    // private jwtService,
    @Inject('USER_REPOSITORY') private userRepository: typeof User
  ) {}
  async find(username: string) {
    const Op = Sequelize.Op;
    return this.userRepository.findOne({
      attributes: [
        'phone',
        'name',
        'sex',
        'status',
        'email',
        'headPortrait',
        'password',
        'id',
        'tags'
      ],
      where: {
        status: 0,
        [Op.or]: [{ phone: username }, { name: username }]
      }
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      await this.userRepository.update(
        { ...updateUserDto },
        {
          where: {
            id
          }
        }
      );
      return returnValue({
        data: null,
        message: '修改成功'
      });
    } catch (error) {
      return returnValue({
        data: null,
        message: error,
        success: false,
        code: 200
      });
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
