// spec/farenheit2celcius_spec.js

import { farenheit2celcius } from '../src/farenheit2celcius.js';

describe("testing farenheit2celcius", function() {

    it("converts freezing point of water (32F) to 0C", function() {
        let temp = farenheit2celcius(32);
        expect(temp).toBeCloseTo(0, 2);
    });

    it("converts boiling point of water (212F) to 100C", function() {
        let temp = farenheit2celcius(212);
        expect(temp).toBeCloseTo(100, 2);
    });

    it("converts room temperature (70F) to about 21.11C", function() {
        let temp = farenheit2celcius(70);
        expect(temp).toBeCloseTo(21.11, 2);
    });

});
