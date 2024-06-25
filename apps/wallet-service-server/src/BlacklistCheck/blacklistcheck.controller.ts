import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BlacklistCheckService } from "./blacklistcheck.service";
import { BlacklistResponse } from "../user/BlacklistResponse";

@swagger.ApiTags("blacklistChecks")
@common.Controller("blacklistChecks")
export class BlacklistCheckController {
  constructor(protected readonly service: BlacklistCheckService) {}

  @common.Post("/check-blacklist")
  @swagger.ApiOkResponse({
    type: BlacklistResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CheckBlacklist(
    @common.Body()
    body: BlacklistResponse
  ): Promise<BlacklistResponse> {
        return this.service.CheckBlacklist(body);
      }
}
