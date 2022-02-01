export default function calculateChange(number){
  //Termination case
  if(isNaN(number)){
    return;
  }
  //Base case
  if(number < 0.01)
  {
    return "";
  }
  if(number >= .25)
  {
    const quarters = Math.floor(number/.25);
    const remaining = Math.round((number - (quarters *.25))*100)/100;
    return `Quarters: ${quarters},`.concat(calculateChange(remaining));
  }
  else if(number >= .10)
  {
    const dimes = Math.floor(number/.1);
    const remaining = Math.round((number - (dimes *.1))*100)/100;
    return ` Dimes: ${dimes},`.concat(calculateChange(remaining));
  }
  else if(number >= .05)
  {
    const nickels = Math.floor(number/.05);
    const remaining = Math.round((number - (nickels *.05))*100)/100;
    return ` Nickels: ${nickels},`.concat(calculateChange(remaining));
  }
  else if(number >= .01)
  {
    const pennies = Math.floor(number/.01);
    const remaining = Math.round((number - (pennies *.01))*100)/100;
    return ` Pennies: ${pennies}`.concat(calculateChange(remaining));
  }
}