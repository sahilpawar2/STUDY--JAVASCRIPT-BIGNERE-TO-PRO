function createHelloWorld() {
    // The returned function ignores any input arguments and returns "Hello World"
    return function(...args) {
        return "Hello World";
    };
}

const f = createHelloWorld();
console.log(f()); // Output: "Hello World"
console.log(f({}, null, 42)); // Output: "Hello World"