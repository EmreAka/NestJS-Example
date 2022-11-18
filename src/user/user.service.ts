import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    getAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    add(user: CreateUserDto) {
        return user;
    }

    getByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({ where: { Email: email } })
    }
}
