/**
 * If the object is not null and the object's constructor is a function, then
 * return true, otherwise return false.
 * @param {any} obj - The object to check
 */
export const isFunction = (obj: any) => !!(obj && obj.constructor === Function);
