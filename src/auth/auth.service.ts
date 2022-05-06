import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";

@Injectable({})

export class AuthService {

    constructor(private prisma: PrismaService) {

    }

    signin(dto: AuthDto) {
        return {
            statusCode: 200,
            message: 'SignIn Successfully',
            data: null,
        };
    }

    signup(dto: AuthDto) {
        return {
            statusCode: 200,
            message: 'SignUp Successfully',
            data: null,
        };
    }
}