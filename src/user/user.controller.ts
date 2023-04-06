import { Controller, Get, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('/all')
    async getAllUsers(
        @Res() response
    ) {
        response.status(200).send(await this.userService.getAllUsers());
    }
}
