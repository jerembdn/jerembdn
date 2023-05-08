export type APIResponse<TData = any> = {
  success: true;
  data: TData;
} | {
  success: false;
  error: string;
};