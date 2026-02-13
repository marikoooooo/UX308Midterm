// src/meters2cubicm.js

// export to use from outside this file
export function meters2cubicm(meters = 0) {
    // processing
    let volume = meters * meters * meters;

    // output
    return volume;
}

if (import.meta.main) {
    console.log(`meters2cubicm(1) returns "${meters2cubicm(1)}"`);
    console.log(`meters2cubicm(2) returns "${meters2cubicm(2)}"`);
    console.log(`meters2cubicm(3) returns "${meters2cubicm(3)}"`);
}
