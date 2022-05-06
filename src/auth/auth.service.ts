import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { SigninDto, SignupDto } from "./dto";
import * as argon from "argon2";
@Injectable({})

export class AuthService {

    constructor(private prisma: PrismaService) {

    }

    signin(dto: SigninDto) {
        return {
            statusCode: 200,
            message: 'SignIn Successfully',
            data: null,
        };
    }

    async signup(dto: SignupDto) {


        // generate the hash
        const hash = await argon.hash(dto.password);

        console.log(hash);

        // save the new user in the db
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                firstName: dto.firstName,
                lastName: dto.lastName,
                hash
            }
        });

        delete user.hash;

        // return th esaved user

        return {
            statusCode: 200,
            message: 'SignUp Successfully',
            data: user,
        };
    }
}