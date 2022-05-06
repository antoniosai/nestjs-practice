import { Controller, Module, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
@Controller()
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('signin')
    signin() {
        return this.authService.signin();
    }

    @Post('signup')
    signup() {
        return this.authService.signin();
    }
}