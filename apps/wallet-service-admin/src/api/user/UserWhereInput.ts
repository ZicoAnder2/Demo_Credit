import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { BlacklistListRelationFilter } from "../blacklist/BlacklistListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  accounts?: AccountListRelationFilter;
  blacklists?: BlacklistListRelationFilter;
  email?: StringNullableFilter;
  emailNew?: StringNullableFilter;
  firstName?: StringNullableFilter;
  firstNameNew?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  lastNameNew?: StringNullableFilter;
  passwordNew?: StringNullableFilter;
  userEmail?: StringNullableFilter;
  userEmailAddress?: StringNullableFilter;
  userFirstName?: StringNullableFilter;
  userLastName?: StringNullableFilter;
  username?: StringFilter;
  userName?: StringNullableFilter;
  usernameNew?: StringNullableFilter;
  userPassword?: StringNullableFilter;
};
