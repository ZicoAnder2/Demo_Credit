import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BlacklistUpdateInput = {
  reason?: string | null;
  user?: UserWhereUniqueInput | null;
};
