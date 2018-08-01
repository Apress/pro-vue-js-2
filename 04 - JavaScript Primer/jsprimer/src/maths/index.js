import addition from "./sum";

export function mean(values) {
    return addition(values)/values.length;
}

export { addition };
export * from "./operations";

export function asyncAdd(values) {
    return new Promise((callback) => {
        setTimeout(() => {
            let total = addition(values);
            console.log(`Async Total: ${total}`);
            callback(total);
        }, 500);
    });
}
