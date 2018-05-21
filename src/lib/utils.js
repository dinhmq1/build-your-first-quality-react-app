// We're going to use ... again, but this time, it's the spread operator.
// These look the same but they're serving two different purposes.
// This is going to take multiple arguments turn them into an array (fn, ...args).
// On the other side, we're going to spread that array back out as arguments
// passd into .bind (null, ...args). We can save that, and our test should pass.
// This should apply as many arguments as we want.
export const partial = (fn, ...args) => fn.bind(null, ...args);

const _pipe = (f, g) => (...args) => g(f(...args));

export const pipe = (...fns) => fns.reduce(_pipe);
