import { closureAsString } from "../src/js/closure";

describe("closureChange", () => {
    test("should return a string", () => {
      expect(typeof closureAsString(1.42)).toEqual("string");
    });

    test("should return a string with counts of each coin type", () => {
        expect(closureAsString(1.42)).toEqual("Quarters: 5, Dimes: 1, Nickels: 1, Pennies: 2");
    });
    test("testing", ()=>{
      expect(closureAsString(.25)).toEqual("Quarters: 1, Dimes: 0, Nickels: 0, Pennies: 0");
    })
});