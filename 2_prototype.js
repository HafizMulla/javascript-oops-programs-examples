function BankAccount(customerName, balance = 0){
    this.customerName = customerName;
    this.accountNumber = Date.now()
    this.balance = balance

    // this.deposit = function(amount){
    //     this.balance += amount
    // }

    // this.withdraw = (amount)=>{
    //     this.balance -= amount
    // }

}

const rakeshAccount = new BankAccount("Rakesh", 1000)
const johnAccount = new BankAccount("John")
// console.log(rakeshAccount)
// rakeshAccount.deposit(5000)
// console.log(rakeshAccount)
// rakeshAccount.withdraw(1000)
// console.log(rakeshAccount)

BankAccount.prototype.deposit = function(amount){
    this.balance += amount
}

BankAccount.prototype.withdraw = (amount)=>{
        this.balance -= amount
    }

console.log(rakeshAccount);