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
  billAmount = (prompt("What is the bill amount?")) * 100;
  console.log(billAmount);
  console.log(typeof billAmount);
  return billAmount;
}

function getTipAmount() {
  tipRate = Number(prompt("What is the tip rate?"));
  console.log(tipRate);
  console.log(typeof tipRate);
  return tipRate;
}

function calculateTip() {
  tip = Math.round(billAmount * (tipRate / 100))
  console.log(tip);
  
  total = Math.round(billAmount + tip) / 100;

//  var total = Math.round(total/100) / 100;
  console.log("Tip: $" + tip);
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

