import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
