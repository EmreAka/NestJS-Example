import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get("")
    getUsers() {
        return this.userService.getAll();
    }

    @Get("/:email")
    getByEmail(@Param("email") email: string) {
        return this.userService.getByEmail(email);
    }

    @Post("")
    addUser(@Body() body: CreateUserDto) {
        return this.userService.add(body);
    }
}
