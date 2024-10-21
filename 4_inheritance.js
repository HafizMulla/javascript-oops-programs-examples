// The below code show the inheritance in the Class example format
class BankAccount{
    customerName;
    accountNumber;
    balance = 0; 

    constructor(customerName, balance = 0){
        this.customerName = customerName;
        this.accountNumber = Date.now()
        this.balance = balance
    
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }
}

class CurrentAccount extends BankAccount{
    transactionLimit = 50000;

    constructor(customerName, balance = 0){
        super(customerName, balance)
    }

    takeBussinessLoan(amount){
        console.log("Taking Bussiness Loan: " +amount);
    }
}

class SavingAccount extends BankAccount{
    transactionLimit = 10000;

    constructor(customerName, balance = 0){
        super(customerName, balance);
    }

    takePersonalLoan(amount){
        console.log("Taking Personal Loan: " +amount);
    }
}

const rakeshAccount = new SavingAccount("Rakesh", 1000)
rakeshAccount.deposit(300)
rakeshAccount.withdraw(200)
rakeshAccount.takePersonalLoan(40000)
console.log(rakeshAccount)


// // The below code show the inheritance in the Constructor example format
// function BankAccount(customerName, balance = 0){
//     this.customerName = customerName;
//     this.accountNumber = Date.now()
//     this.balance = balance

// }

// BankAccount.prototype.deposit = function(amount){
//     this.balance += amount
// }

// BankAccount.prototype.withdraw = function(amount){
//         this.balance -= amount
// }

// function CurrentAccount(customerName, balance = 0){
//     this.transaction = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype)

// CurrentAccount.prototype.takeBussinessLoan = function(amount){
//     BankAccount.call(this, customerName, balance)
//     console.log("Taking bussiness loan: ", amount)
// }

// function SavingAccount(customerName, balance = 0){
//     BankAccount.call(this, customerName, balance)
//     this.transaction = 10000;
// }

// SavingAccount.prototype = Object.create(BankAccount.prototype);

// SavingAccount.prototype.takePersonalLoan = function(amount){
//     console.log("Taking Personal loan: ", amount)
// }


// // const rakeshAccount = new CurrentAccount("Rakesh", 1000)
// const rakeshAccount = new SavingAccount("Rakesh", 1000)
// rakeshAccount.deposit(100)
// rakeshAccount.withdraw(200)
// rakeshAccount.takePersonalLoan(40000)
// // console.log(rakeshAccount)