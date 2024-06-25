import { Module } from "@nestjs/common";
import { RegistrationWithBlacklistCheckService } from "./registrationwithblacklistcheck.service";
import { RegistrationWithBlacklistCheckController } from "./registrationwithblacklistcheck.controller";
import { RegistrationWithBlacklistCheckResolver } from "./registrationwithblacklistcheck.resolver";

@Module({
  controllers: [RegistrationWithBlacklistCheckController],
  providers: [
    RegistrationWithBlacklistCheckService,
    RegistrationWithBlacklistCheckResolver
  ],
  exports: [RegistrationWithBlacklistCheckService],
})
export class RegistrationWithBlacklistCheckModule {}
