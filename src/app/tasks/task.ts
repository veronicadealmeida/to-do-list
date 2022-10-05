export interface Task {
  id?: number;
  status: number;
  title: string;
  category: string;
  description: string;
  dateLimit?: Date;
  dateDone?: Date;
}
