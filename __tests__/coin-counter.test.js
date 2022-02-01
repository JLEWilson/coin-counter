import { TestWatcher } from "jest";
import calculateChange from "../src/js/coin-counter";

describe('calculateChange', () => {
  test("calculateChange should take a number and return a string", () =>{
    const myChange =  calculateChange(0);
    expect(myChange).toEqual("");
  });

  test("calculateChange should return nothing if a non number is passed in", () =>{
    const myChange =  calculateChange("blah");
    expect(myChange).toEqual();
  });

  test("calculateChange should return a string with the number of quarters", () =>{
    const myChange =  calculateChange(1.25);
    expect(myChange).toEqual("Quarters: 5,");
  });

  test("calculateChange should return dimes after quarters", () =>{
    const myChange =   calculateChange(1.35);
    expect(myChange).toEqual("Quarters: 5, Dimes: 1,");
  });

  test("calculateChange should return nickels after dimes", () =>{
    const myChange =  calculateChange(1.40);
    expect(myChange).toEqual("Quarters: 5, Dimes: 1, Nickels: 1,");
  });

  test("calculateChange should return pennies after nickels", () =>{
    const myChange =  calculateChange(1.42);
    expect(myChange).toEqual("Quarters: 5, Dimes: 1, Nickels: 1, Pennies: 2");
  });
});
