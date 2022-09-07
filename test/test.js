const [state, setState] = useState({
    greeting: "Knock knock, "
});
setState({ greeting: state.greeting + "Neo" });
console.log(state.greeting);

