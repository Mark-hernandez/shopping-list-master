var ShoppingListItem = { 
	name:'', 
	hasGotten: false,
}

var state = { 
	items: [] 
};

var apples = Object.create(ShoppingListItem); 
apples.name = "apples";

var oranges = Object.create(ShoppingListItem); 
oranges.name = "oranges";

var milk = Object.create(ShoppingListItem); 
milk.name = "milk"; milk.hasGotten = true;

var bread = Object.create(ShoppingListItem); 
bread.name = "name";


state.items.push(apples); 
state.items.push(oranges); 
state.items.push(milk); 
state.items.push(bread);

function Rerender (state, element) {
    var itemsList = state.items.map(function(item) {
        return  item; 
    });
    element.html(itemsHTML);
};

function DeleteItem(state, itemIndex){
  state.items.splice(itemIndex, 1);
}

function addItem(state, item) {
    state.items.push({
        name: item,
        checked:false,
    }); 
};

function CheckItem(){

}





$(document).ready(function(){

$("#js-shopping-list-form").submit(function(event) {
   addItem(state, $('.shopping-list-entry').val());
    Rerender(state, $('.shopping-list'));
    });

$("")


});


