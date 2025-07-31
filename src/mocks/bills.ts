import { BillPaid, Bills, MonthNames } from "../models/billsModel";

export const BillsMocked: Bills[] = [
  {
    id: 1,
    billName: "agua",
    dueDate: 12,
    estimatedValue: 50,
  },
  {
    id: 2,
    billName: "luz",
    dueDate: 8,
    estimatedValue: 180,
  },
  {
    id: 3,
    billName: "internet",
    dueDate: 20,
    estimatedValue: 119.9,
  },
];

export const BillsPaidMocked: BillPaid[] = [
  {
    id: 1,
    idBill: 1,
    paidDate: 20,
    paidMonth: 6,
    valuePaid: 46.5,
  },
  {
    id: 2,
    idBill: 1,
    paidDate: 20,
    paidMonth: 7,
    valuePaid: 48.5,
  },
];

export const months: MonthNames[] = [
  {
    id: 1,
    name: "janeiro",
  },
  {
    id: 2,
    name: "fevereiro",
  },
  {
    id: 3,
    name: "março",
  },
  {
    id: 4,
    name: "abril",
  },
  {
    id: 5,
    name: "maio",
  },
  {
    id: 6,
    name: "junho",
  },
  {
    id: 7,
    name: "julho",
  },
  {
    id: 8,
    name: "agosto",
  },
  {
    id: 9,
    name: "setembro",
  },
  {
    id: 10,
    name: "outubro",
  },
  {
    id: 11,
    name: "novembro",
  },
  {
    id: 12,
    name: "dezembro",
  },
];
