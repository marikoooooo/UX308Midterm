//cointotal.js

//export
export function coinTotal(nickels = 0, dimes = 0, quarters = 0, loonies = 0, toonies = 0) {
   //processing
   let nickelValue = 0.05;
   let dimeValue = 0.10;
   let quarterValue = 0.24;
   let loonieValue = 1.00;
   let toonieValue = 2.00;

   let total = 
        nickels * nickelValue +
        dimes * dimeValue +
        quarters * quarterValue +
        loonies * loonieValue +
        toonies * toonieValue;

    //output
    return total;
}

if (import.meta.main) {
    console.log(`coinTotal(1, 1, 1, 1, 1) returns "${coinTotal(1, 1, 1, 1, 1)}"`);
}