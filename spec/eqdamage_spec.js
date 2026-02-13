// spec/eqdamage_spec.js

import { eqdamage } from '../src/eqdamage.js';

describe("testing eqdamage", function() {

    it("returns little or no damage for intensity less than 5", function() {
        let result = eqdamage(4.5);
        expect(result).toBe("Little or no damage");
    });

    it("returns some damage for intensity between 5 and 5.5", function() {
        let result = eqdamage(5.2);
        expect(result).toBe("Some damage");
    });

    it("returns serious damage for intensity between 5.5 and 6.5", function() {
        let result = eqdamage(6.0);
        expect(result).toBe("Serious damage: walls may crack or fall");
    });

    it("returns disaster for intensity between 6.5 and 7.5", function() {
        let result = eqdamage(7.0);
        expect(result).toBe("Disaster: buildings may collapse");
    });

    it("returns catastrophe for intensity 7.5 or higher", function() {
        let result = eqdamage(8.1);
        expect(result).toBe("Catastrophe: most buildings destroyed");
    });

});
