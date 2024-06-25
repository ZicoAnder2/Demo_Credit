import * as graphql from "@nestjs/graphql";
import { AccountCreateInput } from "../account/base/AccountCreateInput";
import { RegistrationWithBlacklistCheckService } from "./registrationwithblacklistcheck.service";

export class RegistrationWithBlacklistCheckResolver {
  constructor(protected readonly service: RegistrationWithBlacklistCheckService) {}

  @graphql.Mutation(() => AccountCreateInput)
  async RegisterWithBlacklistCheck(
    @graphql.Args()
    args: AccountCreateInput
  ): Promise<AccountCreateInput> {
    return this.service.RegisterWithBlacklistCheck(args);
  }
}
