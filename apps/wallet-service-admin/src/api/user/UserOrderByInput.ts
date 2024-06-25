import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  emailNew?: SortOrder;
  firstName?: SortOrder;
  firstNameNew?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  lastNameNew?: SortOrder;
  password?: SortOrder;
  passwordNew?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  userEmail?: SortOrder;
  userEmailAddress?: SortOrder;
  userFirstName?: SortOrder;
  userLastName?: SortOrder;
  username?: SortOrder;
  userName?: SortOrder;
  usernameNew?: SortOrder;
  userPassword?: SortOrder;
};
