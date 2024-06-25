import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  PasswordInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { BlacklistTitle } from "../blacklist/BlacklistTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accounts"
          reference="Account"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="blacklists"
          reference="Blacklist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BlacklistTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="emailNew" source="emailNew" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="firstNameNew" source="firstNameNew" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="lastNameNew" source="lastNameNew" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="passwordNew" source="passwordNew" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="user_email" source="userEmail" type="email" />
        <TextInput
          label="user_email_address"
          source="userEmailAddress"
          type="email"
        />
        <TextInput label="user_first_name" source="userFirstName" />
        <TextInput label="user_last_name" source="userLastName" />
        <TextInput label="Username" source="username" />
        <TextInput label="user_name" source="userName" />
        <TextInput label="usernameNew" source="usernameNew" />
        <TextInput label="user_password" source="userPassword" />
      </SimpleForm>
    </Create>
  );
};
