export type Transaction = {
  amount: number | null;
  createdAt: Date;
  description: string | null;
  id: string;
  status: string | null;
  txnAmount: number | null;
  txnCreatedAt: Date | null;
  txnDescription: string | null;
  txnStatus: string | null;
  txnType: string | null;
  typeField: string | null;
  updatedAt: Date;
};
