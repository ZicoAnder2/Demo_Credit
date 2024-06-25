/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Account } from "./Account";
import { AccountCountArgs } from "./AccountCountArgs";
import { AccountFindManyArgs } from "./AccountFindManyArgs";
import { AccountFindUniqueArgs } from "./AccountFindUniqueArgs";
import { CreateAccountArgs } from "./CreateAccountArgs";
import { UpdateAccountArgs } from "./UpdateAccountArgs";
import { DeleteAccountArgs } from "./DeleteAccountArgs";
import { User } from "../../user/base/User";
import { AccountCreateInput } from "./AccountCreateInput";
import { AccountService } from "../account.service";
@graphql.Resolver(() => Account)
export class AccountResolverBase {
  constructor(protected readonly service: AccountService) {}

  async _accountsMeta(
    @graphql.Args() args: AccountCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Account])
  async accounts(
    @graphql.Args() args: AccountFindManyArgs
  ): Promise<Account[]> {
    return this.service.accounts(args);
  }

  @graphql.Query(() => Account, { nullable: true })
  async account(
    @graphql.Args() args: AccountFindUniqueArgs
  ): Promise<Account | null> {
    const result = await this.service.account(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Account)
  async createAccount(
    @graphql.Args() args: CreateAccountArgs
  ): Promise<Account> {
    return await this.service.createAccount({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Account)
  async updateAccount(
    @graphql.Args() args: UpdateAccountArgs
  ): Promise<Account | null> {
    try {
      return await this.service.updateAccount({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Account)
  async deleteAccount(
    @graphql.Args() args: DeleteAccountArgs
  ): Promise<Account | null> {
    try {
      return await this.service.deleteAccount(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Account): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Query(() => String)
  async CreateUserAccount(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateUserAccount(args);
  }

  @graphql.Mutation(() => AccountCreateInput)
  async RegisterAccount(
    @graphql.Args()
    args: AccountCreateInput
  ): Promise<AccountCreateInput> {
    return this.service.RegisterAccount(args);
  }
}
