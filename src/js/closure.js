function closureChange(coinValue){
  return(amount) => {
    return Math.floor(amount/coinValue);
  }
}
const quarters = closureChange(0.25);
const dimes = closureChange(0.1);
const nickels = closureChange(0.05);
const pennies = closureChange(0.01);

export function closureAsString(number){
  //Termination case
  if(isNaN(number)){
    return;
  }
  //quarters
  const quarterAmount = quarters(number);
  const amountWithoutQuarters = number - quarterAmount * 0.25;
  const noQuartersFixed = Math.round(amountWithoutQuarters * 100)/100;
  //dimes
  const dimeAmount = dimes(noQuartersFixed);
  const amountWithoutDimes = amountWithoutQuarters - dimeAmount * 0.1;
  const noDimesFixed = Math.round(amountWithoutDimes * 100)/100;
  //nickels
  const nickelAmount = nickels(noDimesFixed);
  const amountWithoutNickels = amountWithoutDimes- nickelAmount * 0.05;
  const noNickelsFixed = Math.round(amountWithoutNickels * 100)/100;
  //pennies
  const pennyAmount = pennies(noNickelsFixed);
  //output string
  return `Quarters: ${quarterAmount}, Dimes: ${dimeAmount}, Nickels: ${nickelAmount}, Pennies: ${pennyAmount}`;    
}