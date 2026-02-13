// spec/meters2cubicm_spec.js

import { meters2cubicm } from '../src/meters2cubicm.js';

describe("testing meters2cubicm", function() {

    it("converts 1 meter cube to volume 1 cubic meter", function() {
        let volume = meters2cubicm(1);
        expect(volume).toBe(1);
    });

    it("converts 2 meter cube to volume 8 cubic meters", function() {
        let volume = meters2cubicm(2);
        expect(volume).toBe(8);
    });

    it("converts 3 meter cube to volume 27 cubic meters", function() {
        let volume = meters2cubicm(3);
        expect(volume).toBe(27);
    });

});
