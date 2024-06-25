import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BlacklistWhereInput = {
  id?: StringFilter;
  reason?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
