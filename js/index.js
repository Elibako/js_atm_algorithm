//step 1: input card number and pin

let cardNumber = prompt("Enter your card number:");
let pin = prompt("Enter your PIN:");

if (cardNumber === "1234" && pin === "1234") {
  alert("Login successful!");
} else {
  alert("Invalid card number or PIN. Please try again.");
}
//step 2: input type of transaction
let transactionType = prompt("Select transaction type: 1. Withdrawal 2. Deposit 3. Transfer");

//step 3: handle transaction type

if (transactionType === "3") {

} else if (transactionType === "1") {
  
} else if (transactionType === "2") {
  
} else {
  alert("Invalid transaction type. Please try again.");
}

//step 4: transfer process

if (transactionType === "3") {
  let transferAmount = prompt("Enter transfer amount:");
  let fromAccount = prompt("Enter account to transfer from:");
  let toAccount = prompt("Enter account to transfer to:");
  let toBank = prompt("Enter recipient's bank:");
  let recipientName = prompt("Enter recipient's name:");

  // Confirm Transfer
  let confirmTransfer = confirm(`Confirm transfer of ${transferAmount} from ${fromAccount} to ${recipientName} at ${toBank}?`);

  if (confirmTransfer) {
    alert("Transfer successful!");
  } else {
    alert("Transfer cancelled.");
  }
}
//Withdrawal Process


else if (transactionType === "1") {
  let withdrawalAmount = prompt("Enter withdrawal amount:");
  let fromAccount = prompt("Enter account to withdraw from:");

  // Confirm Withdrawal
  let confirmWithdrawal = confirm(`Confirm withdrawal of ${withdrawalAmount} from ${fromAccount}?`);

  if (confirmWithdrawal) {
    alert("Withdrawal successful!");
  } else {
    alert("Withdrawal cancelled.");
  }
}


