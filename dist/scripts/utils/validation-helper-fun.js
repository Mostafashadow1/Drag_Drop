export const assignValidateInputs = (titleValue, descValue) => {
    const titleValid = {
        value: titleValue,
        required: true,
        minLength: 4,
        maxLength: 50,
    };
    const descValid = {
        value: descValue,
        required: true,
        minLength: 10,
        maxLength: 100,
    };
    return [titleValid, descValid];
};
export const handleValidationErrors = (titleValue, descValue) => {
    const errorMsg = null;
    console.log(titleValue, descValue);
};
//# sourceMappingURL=validation-helper-fun.js.map