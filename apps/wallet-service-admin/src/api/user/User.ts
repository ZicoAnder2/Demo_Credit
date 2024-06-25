import { Account } from "../account/Account";
import { Blacklist } from "../blacklist/Blacklist";
import { JsonValue } from "type-fest";

export type User = {
  accounts?: Array<Account>;
  blacklists?: Array<Blacklist>;
  createdAt: Date;
  email: string | null;
  emailNew: string | null;
  firstName: string | null;
  firstNameNew: string | null;
  id: string;
  lastName: string | null;
  lastNameNew: string | null;
  passwordNew: string | null;
  roles: JsonValue;
  updatedAt: Date;
  userEmail: string | null;
  userEmailAddress: string | null;
  userFirstName: string | null;
  userLastName: string | null;
  username: string;
  userName: string | null;
  usernameNew: string | null;
  userPassword: string | null;
};
