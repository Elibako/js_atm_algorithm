// Fake database of users with 10-digit account numbers
let users = [
    {
      cardNumber: '1234',
      pin: '1234',
      bank: 'Bank A',
      name: 'GTB',
      accounts: [
        { accountNumber: '1111111111', balance: 5000 },
        { accountNumber: '2222222222', balance: 3000 }
      ]
    },
    {
      cardNumber: '5678',
      pin: '5678',
      bank: 'Bank B',
      name: 'Access',
      accounts: [
        { accountNumber: '3333333333', balance: 7000 },
        { accountNumber: '4444444444', balance: 2000 }
      ]
    }
  ];
  
  // Step 1: Input card number and PIN
  let cardNumber = prompt("Enter your card number:");
  let pin = prompt("Enter your PIN:");
  
  // Find the user in the database
  let currentUser = users.find(user => user.cardNumber === cardNumber && user.pin === pin);
  
  if (currentUser) {
    alert(`Login successful! Welcome, ${currentUser.name} at ${currentUser.bank}`);
  } else {
    alert("Invalid card number or PIN. Please try again.");
    throw new Error("Login failed."); // Stop the program if login fails
  }
  
  // Step 2: Input type of transaction
  let transactionType = prompt("Select transaction type: 1. Withdrawal 2. Deposit 3. Transfer");
  
  if (transactionType !== "1" && transactionType !== "2" && transactionType !== "3") {
    alert("Invalid transaction type. Please try again.");
    throw new Error("Invalid transaction type."); // Stop the program for invalid input
  }
  
  // Step 3: Handle transaction type
  
  // Transfer Process
  if (transactionType === "3") {
    let fromAccountNumber = prompt("Enter your account number:");
    let transferAmount = parseFloat(prompt("Enter transfer amount:"));
    let toAccountNumber = prompt("Enter recipient's account number:");
    let toBank = prompt("Enter recipient's bank:");
    let recipientName = prompt("Enter recipient's name:");
  
    // Verify if fromAccount exists and has sufficient balance
    let fromAccount = currentUser.accounts.find(account => account.accountNumber === fromAccountNumber);
  
    if (!fromAccount || fromAccount.balance < transferAmount) {
      alert("Invalid account or insufficient funds.");
      throw new Error("Transfer failed.");
    }
  
    // Fake database query to verify recipient account and name
    let recipientUser = users.find(user => 
      user.accounts.some(account => account.accountNumber === toAccountNumber) &&
      user.name === recipientName &&
      user.bank === toBank
    );
  
    if (!recipientUser) {
      alert("Recipient account, name, or bank does not match.");
      throw new Error("Transfer failed.");
    }
  
    // Confirm Transfer
    let confirmTransfer = confirm(`Confirm transfer of $${transferAmount} from ${fromAccountNumber} to ${recipientName} at ${toBank}?`);
  
    if (confirmTransfer) {
      // Perform the transfer
      fromAccount.balance -= transferAmount;
      let toAccount = recipientUser.accounts.find(account => account.accountNumber === toAccountNumber);
      toAccount.balance += transferAmount;
  
      alert(`Transfer successful! You sent $${transferAmount} from ${fromAccountNumber} to ${recipientName} at ${toBank}. Your new balance is $${fromAccount.balance}.`);
    } else {
      alert("Transfer cancelled.");
    }
  }
  
  // Withdrawal Process
  else if (transactionType === "1") {
    let fromAccountNumber = prompt("Enter your account number:");
    let withdrawalAmount = parseFloat(prompt("Enter withdrawal amount:"));
  
    // Verify if the account exists and has sufficient balance
    let fromAccount = currentUser.accounts.find(account => account.accountNumber === fromAccountNumber);
  
    if (!fromAccount || fromAccount.balance < withdrawalAmount) {
      alert("Invalid account or insufficient funds.");
      throw new Error("Withdrawal failed.");
    }
  
    // Confirm Withdrawal
    let confirmWithdrawal = confirm(`Confirm withdrawal of $${withdrawalAmount} from ${fromAccountNumber}?`);
  
    if (confirmWithdrawal) {
      // Perform the withdrawal
      fromAccount.balance -= withdrawalAmount;
      alert(`Withdrawal successful! Your new balance is $${fromAccount.balance}.`);
    } else {
      alert("Withdrawal cancelled.");
    }
  }
  
  // Deposit Process
  else if (transactionType === "2") {
    let toAccountNumber = prompt("Enter your account number:");
    let depositAmount = parseFloat(prompt("Enter deposit amount:"));
  
    // Verify if the account exists
    let toAccount = currentUser.accounts.find(account => account.accountNumber === toAccountNumber);
  
    if (!toAccount) {
      alert("Invalid account.");
      throw new Error("Deposit failed.");
    }
  
    // Confirm Deposit
    let confirmDeposit = confirm(`Confirm deposit of $${depositAmount} to ${toAccountNumber}?`);
  
    if (confirmDeposit) {
      // Perform the deposit
      toAccount.balance += depositAmount;
      alert(`Deposit successful! Your new balance is $${toAccount.balance}.`);
    } else {
      alert("Deposit cancelled.");
    }
  }
  