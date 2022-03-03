import { Controller, HttpCode } from '@nestjs/common';
import { Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { outputFileSync } from 'fs-extra';
import { join } from 'path';
import { returnValue } from 'src/shared';
// import multer = require('multer');
@Controller('/file')
export class FileController {
  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  @HttpCode(200)
  uploadFile(@UploadedFile() file) {
    // console.log(join(__dirname, '/uploadFile', file.originalname));
    outputFileSync(
      join(__dirname, '/uploadFile', file.originalname),
      file.buffer,
    );
    return returnValue({
      data: {
        url: join(__dirname, '/uploadFile', file.originalname),
      },
      message: '上传成功',
    });
  }
}
