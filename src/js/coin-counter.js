//Tales om X amount of money
//determines the exact amount of change needed in quarters, dimes, nickles, and pennies
//NO UI, focus on tests and Good functional code
export default class CoinCounter{
  constructor(){}
  //1.55
  calculateChange(number){
    if(isNaN(number)){
      return "not a number"
    }
    if(number == 0)
    {
      return "";
    }
    if(number >= 0.25)
    {
      const quarters = Math.floor(number/.25);
      const remaining = number - (quarters *.25);
      return `Quarters: ${quarters}`;
    }
  }
}

/*
const incrementCounter = (counter) => {
  if (counter >= 3) {
    return counter;
  } else {
    console.log(counter);
    return incrementCounter(counter + 1);
  }
}

incrementCounter(0);
*/