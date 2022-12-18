export function autoBind(_1, _2, descriptor) {
    const func = descriptor.value;
    const createDescriptor = {
        configurable: true,
        get() {
            return func.bind(this);
        },
    };
    return createDescriptor;
}
//# sourceMappingURL=autoBind.js.map