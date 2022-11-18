import { Body, Controller, Get, Param, ParseIntPipe, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get("")
    getUsers() {
        return this.userService.getAll();
    }

    @UseGuards(AuthGuard("jwt"))
    @Get("me")
    get(@Request() req) {
        return this.userService.getByEmail(req.user.email);
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
