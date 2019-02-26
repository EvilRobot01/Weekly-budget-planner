//Classes
class Budget{
    constructor(budget){
        this.budget = Number(budget);
        this.budgetLeft = this.budget;
    }

    substractFromBudget(amount){
        return this.budgetLeft -= amount;
    }
}

//HTML related
class HTML{
    insertBudget(amount){
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;
    }

    //Print a message relate to imput
    printMessage(message, className){
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('text-center', 'alert', className);
        messageWrapper.appendChild(document.createTextNode(message));

        //Insert into HTML
        document.querySelector('.primary').insertBefore(messageWrapper. addExpenseForm);

        //Clear error
        setTimeout(function(){
            document.querySelector('.primary .alert').remove();
            //addExpenseForm.reset();
        }, 3000);
    }

    //Display list of expenses
    addExpenseToList(name, amount){
        const expensesList = document.querySelector('#expenses ul');

        //Create a li
        const li = document.createElement('li');
        li.className = "list-group-item d-flex justify-content-between align-item-center";

        //Create template
        li.innerHTML = `
        ${name}
        <span class="badge badge-primary badge-pill">${amount}</span>
        `;

        //Insert in HTML
        expensesList.appendChild(li);
    }

    trackBudget(amount){
        const budgetLeftDollars = budget.substractFromBudget(amount);
        budgetLeft.innerHTML = `
        ${budgetLeftDollars}
        `;

        if((budget.budget / 4) > budgetLeftDollars){
            budgetLeft.parentElement.parentElement.classList.remove('alert-sucess', 'alert-warning');
            budgetLeft.parentElement.parentElement.classList.add('alert-danger');
        }else if((budget.budget / 2) > budgetLeftDollars){
            budgetLeft.parentElement.parentElement.classList.remove('alert-sucess');
            budgetLeft.parentElement.parentElement.classList.add('alert-warning');
        }

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

        //Read input values
        const expenseName = document.querySelector('#expense').value;
        const amount = document.querySelector('#amount').value;

        if(expenseName === '' || amount === ''){
            console.log(html);
            html.printMessage('No empty fields', 'alert-danger');
        }else{
            html.addExpenseToList(expenseName, amount);
            html.trackBudget(amount);
            html.printMessage('Added...', 'alert-success');
        }
    });
}