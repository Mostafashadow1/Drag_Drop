import { validationInputs } from "./validation-types.js";

/**
 * @desc asign validate input Specific the type validation
 * @param1 titleValue : string
 * @parma2 descValue : string
 * @return [titleValid, descValid]
 */
export const assignValidateInputs = (titleValue: string, descValue: string) => {
  const titleValid: validationInputs = {
    type: "title",
    value: titleValue,
    required: true,
    minLength: 4,
    maxLength: 50,
  };
  const descValid: validationInputs = {
    type: "descrabtion",
    value: descValue,
    required: true,
    minLength: 10,
    maxLength: 100,
  };
  return [titleValid, descValid];
};

/**
 * @desc :
 *       ? Check validation inputs value.
 * @param inputValid : validation type
 * @return errorMsg: empty or found
 */
export const handleValidationErrors = (inputValid: validationInputs) => {
  let errorMsg: string = "";
  // required
  if (inputValid.required && inputValid.value.trim().length === 0) {
    errorMsg = `${inputValid.type} is required`;
  }
  // min Length
  else if (
    inputValid.minLength &&
    inputValid.minLength > inputValid.value.trim().length
  ) {
    errorMsg = `${inputValid.type} must be at least ${inputValid.minLength} characters`;
  }
  // max Length
  else if (
    inputValid.maxLength &&
    inputValid.maxLength < inputValid.value.trim().length
  ) {
    errorMsg = `${inputValid.type} must be less than ${inputValid.maxLength} characters`;
  }

  return errorMsg;
};
