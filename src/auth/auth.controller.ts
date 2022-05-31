import { Body, Controller, ParseIntPipe, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignupDTO, SigninDTO, ForgetPasswordDTO } from "./dto";
@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signin')
    signin(@Body() dto: SigninDTO){
        console.log(dto);
        return this.authService.signin(dto);
    }

    @Post('signup')
    signup(@Body() dto: SignupDTO) {
        return this.authService.signup(dto);
    }

    @Post('forget-password')
    forgetPassword(@Body() dto: ForgetPasswordDTO) {
        return this.authService.forgetPassword(dto);
    }
}