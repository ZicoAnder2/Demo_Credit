import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  txnAmount?: SortOrder;
  txnCreatedAt?: SortOrder;
  txnDescription?: SortOrder;
  txnStatus?: SortOrder;
  txnType?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
