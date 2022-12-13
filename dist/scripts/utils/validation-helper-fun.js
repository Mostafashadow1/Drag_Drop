export const assignValidateInputs = (titleValue, descValue) => {
    const titleValid = {
        type: "title",
        value: titleValue,
        required: true,
        minLength: 4,
        maxLength: 50,
    };
    const descValid = {
        type: "descrabtion",
        value: descValue,
        required: true,
        minLength: 10,
        maxLength: 100,
    };
    return [titleValid, descValid];
};
export const handleValidationErrors = (inputValid) => {
    let errorMsg = "";
    if (inputValid.required && inputValid.value.trim().length === 0) {
        errorMsg = `${inputValid.type} is required`;
    }
    if (inputValid.minLength && inputValid.minLength > inputValid.value.trim().length) {
        errorMsg = `${inputValid.type} must be at least ${inputValid.minLength} characters`;
    }
    if (inputValid.maxLength && inputValid.maxLength < inputValid.value.trim().length) {
        errorMsg = `${inputValid.type} must be less than ${inputValid.maxLength} characters`;
    }
    return errorMsg;
};
//# sourceMappingURL=validation-helper-fun.js.map