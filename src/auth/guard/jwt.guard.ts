import { ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

export class JwtGuard extends AuthGuard('jwt') {
	constructor(){
		super();
	};

	canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
		console.log("Error => ", err);
		console.log("User => ", user);
		console.log("Info => ", info);
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }

}