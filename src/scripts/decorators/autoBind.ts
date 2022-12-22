/**
 * @desc create auto bind this keyword directly , in use that don't add bind this
 * @return new descriptor to add this keyword
 */
export function autoBind(_1: any, _2: string, descriptor: PropertyDescriptor) {

  const func = descriptor.value;
  const createDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      return func.bind(this);
    },
  };
  return createDescriptor;
}
