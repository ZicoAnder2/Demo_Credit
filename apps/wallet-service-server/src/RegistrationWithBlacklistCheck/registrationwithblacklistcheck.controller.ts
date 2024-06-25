import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RegistrationWithBlacklistCheckService } from "./registrationwithblacklistcheck.service";
import { AccountCreateInput } from "../account/base/AccountCreateInput";

@swagger.ApiTags("registrationWithBlacklistChecks")
@common.Controller("registrationWithBlacklistChecks")
export class RegistrationWithBlacklistCheckController {
  constructor(protected readonly service: RegistrationWithBlacklistCheckService) {}

  @common.Post("/register-with-blacklist-check")
  @swagger.ApiOkResponse({
    type: AccountCreateInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RegisterWithBlacklistCheck(
    @common.Body()
    body: AccountCreateInput
  ): Promise<AccountCreateInput> {
        return this.service.RegisterWithBlacklistCheck(body);
      }
}
