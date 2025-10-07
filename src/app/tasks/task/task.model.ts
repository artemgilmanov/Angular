export interface Task {
  id: string;
  userId: string;
  title: string;
  date: string;
  description: string;
}

export interface NewTaskData {
  title: string;
  summary: string;
  date: string;
}
