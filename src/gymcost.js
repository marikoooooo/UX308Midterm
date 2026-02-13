// src/gymcost.js

// export to use from outside this file
export function gymcost(cost = 0, friends = 0) {
    // processing
    let discountRate = 0;

    if (friends === 1) {
        discountRate = 0.05;
    } else if (friends === 2) {
        discountRate = 0.10;
    } else if (friends >= 3) {
        discountRate = 0.15;
    }

    let discountAmount = cost * discountRate;
    let total = cost - discountAmount;

    // output
    return total;
}

if (import.meta.main) {
    console.log(`gymcost(100, 0) returns "${gymcost(100, 0)}"`);
    console.log(`gymcost(100, 1) returns "${gymcost(100, 1)}"`);
    console.log(`gymcost(100, 2) returns "${gymcost(100, 2)}"`);
    console.log(`gymcost(100, 3) returns "${gymcost(100, 3)}"`);
}
