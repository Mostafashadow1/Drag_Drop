import { validation } from "./validation-types.js";

/* assign validate  in inputs */
export const assignValidateInputs = (titleValue: string, descValue: string) => {
  const titleValid: validation = {
    value: titleValue,
    required: true,
    minLength: 4,
    maxLength: 50,
  };
  const descValid: validation = {
    value: descValue,
    required: true,
    minLength: 10,
    maxLength: 100,
  };
  return [titleValid, descValid];
};

/* Handle validation errors */
export const handleValidationErrors = (titleValue: {}, descValue: {}) => {
  const errorMsg: string | null = null;
  
  // i will start here.
  console.log(titleValue, descValue);
};
