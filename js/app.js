//Classes


//Variables
const addExpenseForm = document.querySelector('#add-expense');

let budget, userBudget;

//Event Listeners
eventListener();
function eventListener(){
    document.addEventListener('DOMContentLoaded', function(){
        userBudget = prompt('What\'s your budget for this week? ');
        if(userBudget === null || userBudget === '' || userBudget ==='0' ){
            window.location.reload();
        }
    });

    //New added expense
    addExpenseForm.addEventListener('submit', function(e){
        e.preventDefault();
    });
}