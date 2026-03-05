export interface Task {
  id: string;
  title: string;
  description?: string | null;
  status: 'pending' | 'in_progress' | 'completed';
  createdAt: string;
  updatedAt: string;
}
