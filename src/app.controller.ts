import { Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { CountDTO } from './aux/aux.entities';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Post()
    async seeddb(): Promise<string> {
        await this.appService.seedDB();
        return Promise.resolve('Seeding DB');
    }

    @Get('/count')
    async count(): Promise<CountDTO> {
        return this.appService.count();
    }
}
