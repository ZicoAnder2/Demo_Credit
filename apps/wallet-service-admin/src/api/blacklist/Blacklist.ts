import { User } from "../user/User";

export type Blacklist = {
  createdAt: Date;
  id: string;
  reason: string | null;
  updatedAt: Date;
  user?: User | null;
};
