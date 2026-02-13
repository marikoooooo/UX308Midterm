import { experimental_LayoutConformance } from "react-native";
import { coinTotal } from "../src/cointotal.js";

describe("testing coinTotal", function() {

    it("calculates total for one of each coin", function() {
        let total = coinTotal(1, 1, 1, 1, 1);
        expect(total).toBeCloseTo(3.40, 2);
    });

    it("calculates total for 5 of each coin", function() {
        let total = coinTotal(5, 5, 5, 5, 5);
        expect(total).toBeCloseTo(17.00, 2);
    });
    it("returns zero when all coins are 0", function() {
        let total = coinTotal(0, 0, 0, 0, 0);
        expect(total).toBe(0);
    });
});