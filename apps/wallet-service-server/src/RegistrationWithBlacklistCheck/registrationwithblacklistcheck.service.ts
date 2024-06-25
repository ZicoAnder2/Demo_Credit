import { Injectable } from "@nestjs/common";
import { AccountCreateInput } from "../account/base/AccountCreateInput";

@Injectable()
export class RegistrationWithBlacklistCheckService {
  constructor() {}
  async RegisterWithBlacklistCheck(args: AccountCreateInput): Promise<AccountCreateInput> {
    throw new Error("Not implemented");
  }
}
