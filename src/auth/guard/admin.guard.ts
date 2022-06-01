import { ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

export class AdminGuard extends AuthGuard('jwt-admin') {
	constructor(){
		super();
	};

	canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
		try {
			console.log("Error => ", err);
			console.log("User => ", user);
			console.log("Info => ", info);
			if (err || !user) {
				throw err || new UnauthorizedException();
			}

			if(user.role !== 'admin') {
				throw new UnauthorizedException();
			}

			return user;
		} catch(error) {
			throw new error;
		}
  }

}