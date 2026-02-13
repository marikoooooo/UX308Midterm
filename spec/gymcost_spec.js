// spec/gymcost_spec.js

import { gymcost } from '../src/gymcost.js';

describe("testing gymcost", function() {

    it("applies 5% discount for 1 friend", function() {
        let total = gymcost(100, 1);
        expect(total).toBeCloseTo(95.00, 2);
    });

    it("applies 10% discount for 2 friends", function() {
        let total = gymcost(100, 2);
        expect(total).toBeCloseTo(90.00, 2);
    });

    it("applies 15% discount for 3 friends", function() {
        let total = gymcost(100, 3);
        expect(total).toBeCloseTo(85.00, 2);
    });

    it("applies 15% discount for 4 friends", function() {
        let total = gymcost(100, 4);
        expect(total).toBeCloseTo(85.00, 2);
    });

});
