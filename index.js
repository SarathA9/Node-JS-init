import  Express  from "express";
const app=Express();
const port=400;

app.listen(port,() =>{
    console.log(`The server is running at ${port}`)
});