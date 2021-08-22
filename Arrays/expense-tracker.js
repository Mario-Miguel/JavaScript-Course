const account = {
    name: 'Mario Miguel',
    expenses: [],
    income: [],
    addExpense: function(description, amount){
        account.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount){
        account.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        const totalExpenses = this.expenses.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue.amount
        }, 0.0)
        const totalIncome = this.income.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue.amount
        }, 0.0)
        const balance = totalIncome - totalExpenses
    
        return `${this.name} has $${totalExpenses} in expenses and $${totalIncome}. Total: ${balance}`
    }

}

//Expense -> description (String), amount (int)
//fun addExpense(description, amount)
//getAccountSummary -> ret total up expenses -> console.log($Name has $total in expenses)

account.addExpense('Coffey', 1.2)
account.addExpense('Books', 20)
account.addExpense('Screen', 450)
account.addIncome('Work payment', 1471.2)

console.log(account.getAccountSummary())