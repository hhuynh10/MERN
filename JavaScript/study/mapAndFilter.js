// .map()
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );


// .filter()
const values1 = [1, 2, 3, 4, 5];
const evens = values1.filter( val => val % 2 === 0 );

const groceries1 = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries1.filter( item => item.includes("o") );


// together
const values2 = [1, 2, 3, 4, 5];
const oddCubes = values2.filter( val => val % 2 !==0 ).map( val => val**3 );

