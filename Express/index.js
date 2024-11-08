const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;
app.listen(port, ()=> {
    console.log(`app listening on port ${port}`);
});

// handling requests

app.use((req,res)=> {
    console.log("new incoming request");
    // console.log(req);
    res.send("this is a basic response");
    res.send({
        name:"apple",
        color:"red"
    });
});

