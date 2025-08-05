import { useEffect, useState } from "react";
import { BillService } from "../services/billsServices";
import { Bills } from "../models/billsModel";
import { months } from "../mocks/bills";

export const useBills = () => {
  const [bills, setBills] = useState<Bills[]>([]);
  const [monthId, setMonthId] = useState(new Date().getMonth());
  const [month, setMonth] = useState(months[monthId].name);
  const [year, setYear] = useState(new Date().getFullYear());

  const defineNameMonth = () => {
    setMonth(months[monthId].name);
  };

  const incrementMonth = async () => {
    if (monthId <= 10) {
      setMonthId((prev) => prev + 1);
    } else {
      setMonthId(0);
      setYear((prev) => prev + 1);
    }
  };
  const decrementMonth = async () => {
    if (monthId >= 1) {
      setMonthId((prev) => prev - 1);
    } else {
      setMonthId(11);
      setYear((prev) => prev - 1);
    }
    defineNameMonth();
  };

  const fetchBills = async (monthId: number) => {
    const result = await BillService.fetchBills();
    setBills(result);
    console.log(monthId);
  };

  useEffect(() => {
    fetchBills(monthId);
    defineNameMonth();
  }, [monthId]);

  return {
    bills,
    month,
    monthId,
    year,
    incrementMonth,
    decrementMonth,
  };
};
