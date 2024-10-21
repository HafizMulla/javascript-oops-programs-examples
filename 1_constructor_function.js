function BankAccount(customerName, balance = 0){
    this.customerName = customerName;
    this.accountNumber = Date.now()
    this.balance = balance

    this.deposit = function(amount){
        this.balance += amount
    }

    this.withdraw = (amount)=>{
        this.balance -= amount
    }

}

const rakeshAccount = new BankAccount("Rakesh", 1000)
const johnAccount = new BankAccount("John")
// console.log(rakeshAccount)
// rakeshAccount.deposit(5000)
// console.log(rakeshAccount)
// rakeshAccount.withdraw(1000)
// console.log(rakeshAccount)

// <!-- ================ DOM Manipulation -->
const accountForm = document.querySelector("#accountForm")
const customerName = document.querySelector("#customerName")
const balance = document.querySelector("#balance")

const depositForm = document.querySelector("#depositForm")
const accountNumber = document.querySelector("#accountNumber")
const amount = document.querySelector("#amount")

const accounts = []

accountForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(customerName.value)
    console.log(balance.value)   
    const account = new BankAccount(customerName.value, +balance.value) 
    accounts.push(account)
    console.log(accounts)
})

depositForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const account = accounts.find((account)=> account.accountNumber === +accountNumber.value);
    account.deposit(+amount.value)
    console.log(accounts)
})