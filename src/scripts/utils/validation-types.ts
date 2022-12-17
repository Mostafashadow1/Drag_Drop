// * The type of validation responsible for inputs
export type validationInputs = {
  type: string;
  value: string;
  required: boolean;
  minLength?: number;
  maxLength?: number;
};
