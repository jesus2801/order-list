//validate hook interface
export interface UseValidateForm {
  parameters: {
    name: string;
    value: string;
    validation?: (v: string) => boolean;
    errorMsg?: string;
  }[];
}
