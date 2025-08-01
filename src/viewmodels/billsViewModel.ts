import { useEffect, useState } from "react";
import { BillService } from "../services/billsServices";
import { Bills } from "../models/billsModel";

export const useBills = () => {
  const [bills, setBills] = useState<Bills[]>([]);

  useEffect(() => {
    const fetchBills = async () => {
      const result = await BillService.fetchBills();
      setBills(result);
    };
    fetchBills();
  }, []);

  return {
    bills,
  };
};
