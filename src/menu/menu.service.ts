import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { returnValue } from 'src/shared';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    // private jwtService,
    @Inject('MENU_REPOSITORY') private menuRepository: typeof Menu,
  ) {}
  async create(createMenuDto: CreateMenuDto) {
    try {
      this.menuRepository.create({
        ...createMenuDto,
        status: 0,
      });
      return returnValue({
        data: {},
      });
    } catch (error) {
      return returnValue({
        data: {},
        success: false,
        message: error,
      });
    }
  }

  async findAll({
    pageNum = 10,
    current = 1,
    keyWords = '',
  }: PageQuery & { keyWords: string }) {
    try {
      const res = await this.menuRepository.findAndCountAll({
        limit: +pageNum,
        offset: (current - 1) * pageNum,
        where: {
          status: 0,
          [Op.or]: {
            name: {
              [Op.like]: `%${keyWords}%`,
            },
            code: {
              [Op.like]: `%${keyWords}%`,
            },
          },
        },
        raw: true,
      });
      return returnValue({ data: res });
    } catch (error) {
      return returnValue({
        message: error,
        success: false,
        data: {},
      });
    }
  }
  async findOne(id: number) {
    try {
      const res = await this.menuRepository.findOne({
        where: {
          id: id,
          status: 0,
          // name: id,
        },
      });
      return returnValue({
        data: res,
      });
    } catch (error) {
      return returnValue({
        data: {},
        success: false,
        message: error,
      });
    }
  }
  /**
   * 更新
   * @param updateMenuDto
   * @returns
   */
  async update(updateMenuDto: UpdateMenuDto) {
    try {
      const { id, ...info } = updateMenuDto;
      await this.menuRepository.update(info, {
        where: {
          id: id,
          status: 0,
          // name: id,
        },
      });
      return returnValue({
        data: {},
      });
    } catch (error) {
      return returnValue({
        data: {},
        success: false,
        message: error,
      });
    }
  }
  /**
   * 删除
   * @param id
   * @returns
   */
  async remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
