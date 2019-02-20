//Classes
class Budget{
    constructor(budget){
        this.budget = Number(budget);
        this.budgetLeft = this.budget;
    }
}

//HTML related
class HTML{
    insertBudget(amount){
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;
    }
}

//Variables
const addExpenseForm = document.querySelector('#add-expense'),
      budgetTotal = document.querySelector('span#total'),
      budgetLeft = document.querySelector('span#left');

let budget, userBudget;

const html = new HTML();

//Event Listeners
eventListener();
function eventListener(){
    document.addEventListener('DOMContentLoaded', function(){
        userBudget = prompt('What\'s your budget for this week? ');
        //Validate budget
        if(userBudget === null || userBudget === '' || userBudget ==='0' ){
            window.location.reload();
        }else{
            budget = new Budget(userBudget);

            html.insertBudget(budget.budget);
        }
    });

    //New added expense
    addExpenseForm.addEventListener('submit', function(e){
        e.preventDefault();
    });
}