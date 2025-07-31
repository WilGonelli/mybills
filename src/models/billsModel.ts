export interface Bills {
  id: number;
  billName: string;
  dueDate: number;
  estimatedValue: number;
}

export interface BillPaid {
  id: number;
  idBill: number;
  paidDate: number;
  paidMonth: number;
  valuePaid: number;
}

export interface MonthNames {
  id: number;
  name: string;
}
