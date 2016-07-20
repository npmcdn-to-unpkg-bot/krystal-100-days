function tipCalculator() {
  var billAmount = 0,
    tip = 0,
    tipRate = 0,
    total = 0;
  
  getBillAmount();
  getTipAmount();
  calculateTip();
}

function getBillAmount() {
  billAmount = prompt("What is the bill amount?") * 100;
  return billAmount;
}

function getTipAmount() {
  tipRate = prompt("What is the tip rate?") / 100;
  return tipRate;
}

function calculateTip() {
  tip = billAmount * tipRate;
  tipDollars = (tip/100).toFixed(2);
  
  total = ((billAmount + tip) / 100).toFixed(2);

  console.log("Tip: $" + tipDollars);
  console.log("Total: $" + total);
}



tipCalculator();








//Tests

//1.
  //bill amount: 10
  //tip rate: 15
  //expected: 
    //tip: $1.50
    //Total: $11.50

//2. 
  //bill amount: 11.25
  //tip rate: 15
  //expected: 
    //tip: $1.69
    //total: $12.94

//3. 
  //bill amount: 12
  //tip rate: 0
    //expected: 
      //tip: 0
      //total: 12

