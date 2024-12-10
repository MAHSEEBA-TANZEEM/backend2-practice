const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;
app.listen(port, ()=> {
    console.log(`app listening on port ${port}`);
});

// handling requests
// app.use((req,res)=> {
//     console.log("new incoming request");
//     res.send("This is a basic response");
// });

// Sending response

// app.use((req,res)=> {
//     console.log("new incoming request");
    // console.log(req);
    // res.send("this is a basic response");
    // res.send({
    //     name:"apple",
    //     color:"red"
    // });
//     let code = "<h1>Fruits<h1><ul><li>Apple</li><li>Orange</li></ul>";
//     res.send(code);
// });

// routing

// app.get("/",(req,res)=> {
//     res.send("you contacted the root path");
// });

// app.get("/apple",(req,res)=> {
//     res.send("YOu contacted the apple path");
// });

// app.get("/orange",(req,res)=> {
//     res.send("YOu contacted the orange path");
// });

// app.get("*",(req,res)=> {
//     res.send("This path doesnt exist");
// });

// app.post("/",(req,res)=> {
//     res.send("You sent a post request to the root");
// });

//  path parameters
app.get("/:username/:id",(req,res)=> {
    let { username,id } = req.params;
    console.log(req.params);
    res.send(`This account belongs to @ ${username}`);
});

// query string

app.get("/search",(req,res)=> {
    let { q } = req.query;
    console.log(req.query);
    if(!q) {
        res.send("no search query");
    }
    res.send(`results for query: ${q}`);
});