import { Injectable } from "@nestjs/common";

@Injectable({})

export class AuthService {
    signin() {
        return {
            statusCode: 200,
            message: 'SignIn Successfully',
            data: null,
        };
    }

    signup() {
        return {
            statusCode: 200,
            message: 'SignUp Successfully',
            data: null,
        };
    }
}