import { validation } from "./validation-types.js";

/* assign validate  in inputs */
export const assignValidateInputs = (titleValue: string, descValue: string) => {
  const titleValid: validation = {
    type: "title",
    value: titleValue,
    required: true,
    minLength: 4,
    maxLength: 50,
  };
  const descValid: validation = {
    type: "descrabtion",
    value: descValue,
    required: true,
    minLength: 10,
    maxLength: 100,
  };
  return [titleValid, descValid];
};

/* Handle validation errors */
export const handleValidationErrors = (inputValid: validation) => {
  let errorMsg: string = "";
  // required
  if (inputValid.required && inputValid.value.trim().length === 0) {
    errorMsg = `${inputValid.type} is required`;
  }
  // min Length
  if (inputValid.minLength && inputValid.minLength > inputValid.value.trim().length) {
    errorMsg = `${inputValid.type} must be at least ${inputValid.minLength} characters`;
  }
  // max Length
  if (inputValid.maxLength && inputValid.maxLength < inputValid.value.trim().length) {
    errorMsg = `${inputValid.type} must be less than ${inputValid.maxLength} characters`;
  }

  return errorMsg;
};
