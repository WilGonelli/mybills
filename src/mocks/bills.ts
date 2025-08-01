import { Bills_instaces, Bills, Month_names } from "../models/billsModel";

export const BillsMocked: Bills[] = [
  {
    id: 1,
    billName: "agua",
    due_day: 12,
    type: "fixed",
    start_month: "2025-06",
    end_month: null,
    created_at: "2025-06-10",
  },
  {
    id: 2,
    billName: "luz",
    due_day: 8,
    type: "fixed",
    start_month: "2025-06",
    end_month: null,
    created_at: "2025-06-10",
  },
  {
    id: 3,
    billName: "internet",
    due_day: 20,
    type: "fixed",
    start_month: "2025-06",
    end_month: null,
    created_at: "2025-06-10",
  },
];

export const BillsPaidMocked: Bills_instaces[] = [
  {
    id: 1,
    bill_id: 1,
    due_date: "2025-06-10",
    amount_paid: null,
    paid: false,
    paid_at: null,
  },
  {
    id: 2,
    bill_id: 1,
    due_date: "2025-06-10",
    amount_paid: null,
    paid: false,
    paid_at: null,
  },
];

export const months: Month_names[] = [
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
