interface ReturnValue {
  (data: {
    data: any;
    success?: boolean;
    code?: 200 | 401 | 403 | 405;
    message?: string;
  }): {
    data: any;
    success: boolean;
    code: 200 | 401 | 403 | 405;
    message: string;
  };
}
/**
 *
 * @param data
 * @param success
 * @param code 返回值  200 正常 401 jwt过期 403|405 越权
 */
export const returnValue: ReturnValue = ({
  data,
  success = true,
  code = 200,
  message = success ? '操作成功' : '操作失败',
}) => {
  return {
    data,
    success,
    code,
    message,
  };
};
