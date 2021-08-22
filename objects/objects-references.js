let myAccount = {
    name: 'Mario',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount){
    account.expenses = account.expenses + amount
}

//addIncome
let addIncome = function(account, amount){
    account.income = account.income + amount
}

//resetAccount
let resetAccount = function(account){
    account.income = 0
    account.expenses = 0
}

//getAccountSummary
let getAccountSummary = function(account){
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income, $${account.expenses} in espense.`
}

addIncome(myAccount, 100)
addExpense(myAccount, 20)
addExpense(myAccount, 10)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))