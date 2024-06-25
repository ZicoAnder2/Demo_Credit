import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="emailNew" source="emailNew" />
        <TextField label="First Name" source="firstName" />
        <TextField label="firstNameNew" source="firstNameNew" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="lastNameNew" source="lastNameNew" />
        <TextField label="passwordNew" source="passwordNew" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="user_email" source="userEmail" />
        <TextField label="user_email_address" source="userEmailAddress" />
        <TextField label="user_first_name" source="userFirstName" />
        <TextField label="user_last_name" source="userLastName" />
        <TextField label="Username" source="username" />
        <TextField label="user_name" source="userName" />
        <TextField label="usernameNew" source="usernameNew" />
        <TextField label="user_password" source="userPassword" />
      </Datagrid>
    </List>
  );
};
