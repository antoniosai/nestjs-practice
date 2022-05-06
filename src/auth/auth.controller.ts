import { Body, Controller, ParseIntPipe, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SigninDto, SignupDto } from "./dto";
@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signin')
    signin(@Body() dto: SigninDto){
        console.log(dto);
        return this.authService.signin(dto);
    }

    @Post('signup')
    signup(@Body() dto: SignupDto) {
        return this.authService.signup(dto);
    }
}