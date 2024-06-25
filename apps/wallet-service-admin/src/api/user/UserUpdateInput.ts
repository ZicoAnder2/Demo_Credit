import { AccountUpdateManyWithoutUsersInput } from "./AccountUpdateManyWithoutUsersInput";
import { BlacklistUpdateManyWithoutUsersInput } from "./BlacklistUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  accounts?: AccountUpdateManyWithoutUsersInput;
  blacklists?: BlacklistUpdateManyWithoutUsersInput;
  email?: string | null;
  emailNew?: string | null;
  firstName?: string | null;
  firstNameNew?: string | null;
  lastName?: string | null;
  lastNameNew?: string | null;
  password?: string;
  passwordNew?: string | null;
  roles?: InputJsonValue;
  userEmail?: string | null;
  userEmailAddress?: string | null;
  userFirstName?: string | null;
  userLastName?: string | null;
  username?: string;
  userName?: string | null;
  usernameNew?: string | null;
  userPassword?: string | null;
};
