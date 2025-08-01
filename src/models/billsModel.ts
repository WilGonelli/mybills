export interface Bills {
  id: number;
  billName: string;
  due_day: number;
  type: "unique" | "recurring" | "fixed";
  start_month: string;
  end_month: string | null;
  created_at: string;
}

export interface Bills_instaces {
  id: number;
  bill_id: number;
  due_date: string;
  amount_paid: number | null;
  paid: boolean;
  paid_at: string | null;
}

export interface Month_names {
  id: number;
  name: string;
}
