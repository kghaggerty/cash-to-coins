/* const piggyBank = {
    pennies: 20,
    nickels: 15,
    dimes: 10,
    quarters: 5
};

let dollarAmount = 0;

//Define that a penny = .01
// Take value of piggybank.piggies and multiply by the value of penny and put it in dollarAmount.

dollarAmount += piggyBank.pennies * .01
console.log(dollarAmount)
dollarAmount += piggyBank.nickels * .05
console.log(dollarAmount)
dollarAmount += piggyBank.dimes * .10
console.log(dollarAmount)
dollarAmount += piggyBank.quarters * .25
console.log(dollarAmount)

*/

let dollarAmount = 5.69 * 100
const piggyBank = {
    "pennies" : 0,
    "nickels" : 0,
    "dimes" : 0,
    "quarters" : 0
}

while (dollarAmount!= 0) {
    if (dollarAmount >= 25) {
        dollarAmount = dollarAmount-25;
        piggyBank.quarters++
    } 
    else if (dollarAmount >= 10) {
        dollarAmount = dollarAmount-10
        piggyBank.dimes
        }
     else if (dollarAmount>= 5) {
        dollarAmount = dollarAmount-5
        piggyBank.nickels++
        }
     else if (dollarAmount >= 1) {
        dollarAmount = dollarAmount-1
        piggyBank.pennies++
        }
}



console.log(piggyBank)




