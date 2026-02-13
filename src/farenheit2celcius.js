// src/farenheit2celcius.js

// export to use from outside this file
export function farenheit2celcius(farenheit = 0) {
    // processing
    let celcius = (farenheit - 32) * 5 / 9;

    // output
    return celcius;
}

if (import.meta.main) {
    console.log(`farenheit2celcius(32) returns "${farenheit2celcius(32)}"`);
    console.log(`farenheit2celcius(212) returns "${farenheit2celcius(212)}"`);
}
