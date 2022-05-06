import { ForbiddenException, Injectable, UnprocessableEntityException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { SigninDto, SignupDto } from "./dto";
import * as argon from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
@Injectable({})

export class AuthService {

    constructor(private prisma: PrismaService) {

    }

    async signin(dto: SigninDto) {

        // find user by email
        try {
            const user = await this.prisma.user.findFirst({
                where: {
                    email: dto.email
                }
            });

            if(!user) throw new UnprocessableEntityException('Credentials Incorrect');

            const pwMatches = await argon.verify(user.hash, dto.password);

            if(!pwMatches) {
                throw new ForbiddenException('Credentials Incorrect');
            }

            delete user.hash;

            return {
                statusCode: 200,
                message: 'SignIn Successfully',
                data: null,
            };

        } catch (error) {
            throw error;
        }
        // if user doesnt exists throw exception

        // send back to user

    }

    async signup(dto: SignupDto) {


        // generate the hash
        const hash = await argon.hash(dto.password);

        try {
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
        } catch (error) {
            if(error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Credentials invalid');
                }
            }
            throw error;
        }

    }
}