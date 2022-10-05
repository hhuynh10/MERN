const express = require("express");
const app = express();
const PORT = 8000
    
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const Routes = require("./routes/joke.routes");
Routes(app);
    
app.listen(PORT, ()=> {
    console.log (`Server is up and running on ${PORT}`)
})