// src/eqdamage.js

// export to use from outside this file
export function eqdamage(intensity = 0) {
    // processing
    let result = "";

    if (intensity < 5) {
        result = "Little or no damage";
    } else if (intensity < 5.5) {
        result = "Some damage";
    } else if (intensity < 6.5) {
        result = "Serious damage: walls may crack or fall";
    } else if (intensity < 7.5) {
        result = "Disaster: buildings may collapse";
    } else {
        result = "Catastrophe: most buildings destroyed";
    }

    // output
    return result;
}

if (import.meta.main) {
    console.log(`eqdamage(4.8) returns "${eqdamage(4.8)}"`);
    console.log(`eqdamage(5.2) returns "${eqdamage(5.2)}"`);
    console.log(`eqdamage(6.0) returns "${eqdamage(6.0)}"`);
    console.log(`eqdamage(7.0) returns "${eqdamage(7.0)}"`);
    console.log(`eqdamage(8.0) returns "${eqdamage(8.0)}"`);
}
