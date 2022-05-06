import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule],
  // controllers: [],
  // providers: [],
})
export class AppModule {}
