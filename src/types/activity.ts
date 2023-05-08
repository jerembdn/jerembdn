export type Activity = {
  id: string;
  type: number;
  name: string;
  details: string;
  state: string;
  timestamps: {
    start: number;
    end: number;
  };
  created_at: number;
}