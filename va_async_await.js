//Example

function multiply(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x * 10);
        }, 2000);
    });
}

function plus(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x + 10);
        }, 1000);
    });
}

async function layer(x) {
    const value = await plus(x);
    console.log(value)

    const value1 = await multiply(x);
    console.log(value1);
};

console.log('Resolve:');


layer(10);