/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {

  returnModelApi(data: any) {
    return {
      code: 1000,
      status: 400,
      message: 'done',
      body: {
        data
      },
    }
  }
}
