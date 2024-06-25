import { Injectable } from "@nestjs/common";
import { BlacklistResponse } from "../user/BlacklistResponse";

@Injectable()
export class BlacklistCheckService {
  constructor() {}
  async CheckBlacklist(args: BlacklistResponse): Promise<BlacklistResponse> {
    throw new Error("Not implemented");
  }
}
