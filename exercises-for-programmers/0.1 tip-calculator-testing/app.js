function tipCalculator(bill, tip) {
  var billAmount,
    tipRate,
    tipDollars,
    total;

  getBillAmount();
  getTipAmount();
  calculateTip();


  function getBillAmount() {
    billAmount = bill * 100;
    return billAmount;
  }

  function getTipAmount() {
    tipRate = tip / 100;
    return tipRate;
  }

  function calculateTip() {
    tip = billAmount * tipRate;
    tipDollars = (tip / 100).toFixed(2);

    total = ((billAmount + tip) / 100).toFixed(2);

    return total;
  }
  
  return "Tip amount is: $" + tipDollars + " and total amount is: $" + total;
}

expect(tipCalculator(10,15)).toBe("Tip amount is: $1.50 and total amount is: $11.50");
expect(tipCalculator(11.25,15)).toBe("Tip amount is: $1.69 and total amount is: $12.94");
expect(tipCalculator(25, 10)).toBe("Tip amount is: $2.50 and total amount is: $27.50")

console.log("All tests have passed");