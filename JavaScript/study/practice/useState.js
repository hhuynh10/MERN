const [state, setState] = useState({ // seems like a lot of extra syntax just to instantiate
    name: ""                         // one piece of state that's holding an empty string, doesn't it?
});
const onClick = () => {
    setState({name: "Scary Terry"}) // here we have to go inside our object, get to our appropriate key,
}                                   // THEN change the value
console.log(state.name);

// 
const [name, setName] = useState(""); // we don't have to stick with only state and setState as variable names
const onClick = () => {
    setName("Scary Terry") // no layers to peel back to get to the value we want to change!
}
console.log(name); // now "state" represents only the string value

// 
const [text, setText] = useState("");
setText("state state I am setting state!!!");
console.log(text);

// 
const [state, setState] = useState({
    items: [],
    totalPrice: 0.00
});
setState({ items: state.items, totalPrice: state.totalPrice + 10.99 });
console.log(state.items);

// 
const [arr, setArr] = useState([]);
for(let i=1; i<=5; i++) {
    setArr([...arr, i]);
}
console.log(arr);

// 
const [state, setState] = useState({
    greeting: "Knock knock, "
});
setState({ greeting: state.greeting + "Neo" });
console.log(state.greeting);