import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="status" source="status" />
        <NumberInput label="txn_amount" source="txnAmount" />
        <DateTimeInput label="txn_created_at" source="txnCreatedAt" />
        <TextInput label="txn_description" multiline source="txnDescription" />
        <TextInput label="txn_status" source="txnStatus" />
        <TextInput label="txn_type" source="txnType" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
