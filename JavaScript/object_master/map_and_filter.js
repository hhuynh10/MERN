const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

// an array of pokémon objects where the id is evenly divisible by 3
const one = pokemon.filter(item => item.id % 3 === 0 );
console.log(one);

// an array of pokémon objects that are "fire" type
const two = pokemon.filter( item => item.types.includes("fire") );
console.log(two);

// an array of pokémon objects that have more than one type
const three = pokemon.filter( item => item.types[1] );
console.log(three);

// an array with just the names of the pokémon
const four = pokemon.map( item => item.name );
console.log(four);

// an array with just the names of pokémon with an id greater than 99
const five = pokemon.filter( item => item.id > 99 ).map( item => item.name );
console.log(five);

// an array with just the names of the pokémon whose only type is poison
const six = pokemon.filter( item => item.types.includes("poison") ).map( item => item.name );
console.log(six);

// an array containing just the first type of all the pokémon whose second type is "flying"
const seven = pokemon.filter( item => item.types[1] === "flying" ).map(item => item.name );
console.log(seven);

// a count of the number of pokémon that are "normal" type
const eight = pokemon.filter( item => item.types.includes("normal") ).reduce((acc, item)=> (
    acc + item
))
console.log(eight);