import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signin')
    signin(@Body() dto: AuthDto) {
        console.log(dto);

        if(!dto.email) {
            console.log('no email');
        }
        return this.authService.signin();
    }

    @Post('signup')
    signup() {
        return this.authService.signin();
    }
}