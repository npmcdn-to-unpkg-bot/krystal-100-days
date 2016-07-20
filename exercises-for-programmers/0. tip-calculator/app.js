function tipCalculator() {
  var billAmount = 0,
    tip = 0,
    tipRate = 0,
    tipDollars = 0,
    total = 0;

  getBillAmount();
  getTipAmount();
  calculateTip();
}

function getBillAmount() {
  billAmount = prompt("What is the bill amount?") * 100;
}

function getTipAmount() {
  tipRate = prompt("What is the tip rate?") / 100;
}

function calculateTip() {
  tip = billAmount * tipRate;
  tipDollars = (tip / 100).toFixed(2);

  total = ((billAmount + tip) / 100).toFixed(2);

  console.log("Tip: $" + tipDollars);
  console.log("Total: $" + total);
}

tipCalculator();