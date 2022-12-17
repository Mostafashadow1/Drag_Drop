/**
 * @desc asign validate input Specific the type validation
 * @param1 titleValue : string
 * @parma2 descValue : string
 * @return [titleValid, descValid]
 */
export var assignValidateInputs = function (titleValue, descValue) {
    var titleValid = {
        type: "title",
        value: titleValue,
        required: true,
        minLength: 4,
        maxLength: 50
    };
    var descValid = {
        type: "descrabtion",
        value: descValue,
        required: true,
        minLength: 10,
        maxLength: 100
    };
    return [titleValid, descValid];
};
/**
 * @desc :
 *       ? Check validation inputs value.
 * @param inputValid : validation type
 * @return errorMsg: empty or found
 */
export var handleValidationErrors = function (inputValid) {
    var errorMsg = "";
    // required
    if (inputValid.required && inputValid.value.trim().length === 0) {
        errorMsg = "".concat(inputValid.type, " is required");
    }
    // min Length
    else if (inputValid.minLength &&
        inputValid.minLength > inputValid.value.trim().length) {
        errorMsg = "".concat(inputValid.type, " must be at least ").concat(inputValid.minLength, " characters");
    }
    // max Length
    else if (inputValid.maxLength &&
        inputValid.maxLength < inputValid.value.trim().length) {
        errorMsg = "".concat(inputValid.type, " must be less than ").concat(inputValid.maxLength, " characters");
    }
    return errorMsg;
};
