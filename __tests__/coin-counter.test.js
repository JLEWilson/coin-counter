import { TestWatcher } from "jest";
import CoinCounter from "../src/js/coin-counter";

describe('CoinCounter', () => {

  let coinCounter;
  beforeEach(() => {
    coinCounter = new CoinCounter();
  });

  test("should create a coinCounter object", () => {
    const coinCounter1 = new CoinCounter();
    expect(coinCounter1).toBeInstanceOf(CoinCounter);
  });

  test("calculateChange should take a number and return a string", () =>{
    const myChange =  coinCounter.calculateChange(0);
    expect(myChange).toEqual("");
  });

  test("calculateChange should return a string with the number of quarters", () =>{
    const myChange =  coinCounter.calculateChange(1.25);
    expect(myChange).toEqual("Quarters: 5");
  });

  test("calculateChange should return not a number if a non number is passed in", () =>{
    const myChange =  coinCounter.calculateChange("blah");
    expect(myChange).toEqual("not a number");
  });

  test("calculateChange should return dimes after quarters", () =>{
    const myChange =  coinCounter.calculateChange(1.30);
    expect(myChange).toEqual("Quarters: 5, Dimes: 1");
  });
});

//expect.objectContaining(object)
/*

*/