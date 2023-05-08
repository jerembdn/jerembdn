// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type APIResponse<TData = any> =
  | {
      success: true;
      data: TData;
    }
  | {
      success: false;
      error: string;
    };
