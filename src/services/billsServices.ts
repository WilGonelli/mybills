import { Bills } from "../models/billsModel";
import { BillsMocked } from "../mocks/bills";

export const BillService = {
  fetchBills: async () => {
    const bills = BillsMocked;
    return bills;
  },
};
