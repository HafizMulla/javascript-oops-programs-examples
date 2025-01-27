class BankAccount{
    customerName;
    accountNumber;
    #balance = 0; 

    constructor(customerName, balance = 0){
        this.customerName = customerName;
        this.accountNumber = Date.now()
        this.#balance = balance
    
    }

    deposit(amount){
        this.#balance += amount;
    }

    withdraw(amount){
        this.#balance -= amount;
    }

    set balance(amount){
        if (isNaN(amount)){
            throw new Error("Amount is not valid input");
        }
        this.#balance = amount;
    }

    get balance(){
        return this.#balance
    }
}

class CurrentAccount extends BankAccount{
    transactionLimit = 50000;

    constructor(customerName, balance = 0){
        super(customerName, balance)
    }

    #calculateInterest(amoung){
        console.log("Calculating Interest");
    }

    takeBussinessLoan(amount){
        this.#calculateInterest(amount);
        console.log("Taking Bussiness Loan: " +amount);
    }
}

const rakeshAccount = new CurrentAccount("Rakesh", 2000)
// rakeshAccount.setBalance(400)
rakeshAccount.balance = 5000
console.log(rakeshAccount.takeBussinessLoan(40000))
