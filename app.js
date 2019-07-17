//BUDGET CONTROLLER
var budgetController = (function(){
  

})();

// UI CONTROLLER
var UIController = (function(){
    return {
      getInput: function() {
        var type = document.querySelector('.add__type').nodeValue;
      }
    }
})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

  var ctrlAddItem = function () {
      // 1. Get input data
      // 2. Add the item to the budget controller
      // 3. Add the item to the UI
      // 4. Calculate the Budget
      // 5. Display the budget on the UI
      console.log('it works')
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function (event){

      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }

  })

  
})(budgetController, UIController);