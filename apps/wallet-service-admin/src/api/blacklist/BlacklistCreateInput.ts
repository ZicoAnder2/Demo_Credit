import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BlacklistCreateInput = {
  reason?: string | null;
  user?: UserWhereUniqueInput | null;
};
