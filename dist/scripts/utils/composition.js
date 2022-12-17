export const composeValidation = (fn1, fn2) => (param1, param2) => {
    fn1(fn2(param1));
};
//# sourceMappingURL=composition.js.map