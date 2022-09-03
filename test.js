const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);

const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];

console.log(needThyme);

const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];

console.log(gotTheThyme);

const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];

console.log(notNeceCelery);

const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);

const sortedItems = [...items].sort();

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryLists = groceries.map( item => `<li>${item}</li>` );

console.log(groceryLists);