import { TestWatcher } from "jest";
import CoinCounter from "../src/js/coin-counter";

describe('CoinCounter', () => {

  let coinCounter;
  beforeEach(() => {
    coinCounter = new CoinCounter();
  });

  test("should create a coinCointer object", () => {
    const coinCounter1 = new CoinCounter();
    expect(coinCounter1).toBeInstanceOf(CoinCounter);
  });

  test("calculateChange should take a number and return an object", () =>{
    const myChange =  coinCounter.calculateChange(1.25);
    expect(myChange).toEqual({});
  });
});

//expect.objectContaining(object)
