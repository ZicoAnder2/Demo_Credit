import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: StringNullableFilter;
  txnAmount?: FloatNullableFilter;
  txnCreatedAt?: DateTimeNullableFilter;
  txnDescription?: StringNullableFilter;
  txnStatus?: StringNullableFilter;
  txnType?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
