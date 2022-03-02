export enum Sex {
  '男' = 0,
  '女' = 1,
  '其他' = 2,
}
/**
 * 新增实体类
 */
export class CreateUserDto {
  phone: string;
  name: string;
  status: 0;
  birth: string;
  password: string;
  email: string;
  sex: Sex;
}
