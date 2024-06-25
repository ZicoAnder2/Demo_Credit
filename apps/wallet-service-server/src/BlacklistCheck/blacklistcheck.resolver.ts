import * as graphql from "@nestjs/graphql";
import { BlacklistResponse } from "../user/BlacklistResponse";
import { BlacklistCheckService } from "./blacklistcheck.service";

export class BlacklistCheckResolver {
  constructor(protected readonly service: BlacklistCheckService) {}

  @graphql.Query(() => BlacklistResponse)
  async CheckBlacklist(
    @graphql.Args()
    args: BlacklistResponse
  ): Promise<BlacklistResponse> {
    return this.service.CheckBlacklist(args);
  }
}
