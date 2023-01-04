const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);

const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];

const needThyme1 = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );

const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];

const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];

console.log(notNeceCelery)

const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
const sortedItems = [...items].sort();

const sortedGroceries = [...items].sort( (a, b) => (a.item > b.item) ? 1 : -1 );

console.log(sortedItems)

console.log(sortedGroceries)
