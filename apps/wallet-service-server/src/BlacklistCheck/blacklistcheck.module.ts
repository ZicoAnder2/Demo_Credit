import { Module } from "@nestjs/common";
import { BlacklistCheckService } from "./blacklistcheck.service";
import { BlacklistCheckController } from "./blacklistcheck.controller";
import { BlacklistCheckResolver } from "./blacklistcheck.resolver";

@Module({
  controllers: [BlacklistCheckController],
  providers: [BlacklistCheckService, BlacklistCheckResolver],
  exports: [BlacklistCheckService],
})
export class BlacklistCheckModule {}
