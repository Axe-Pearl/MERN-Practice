const express = require("express");
const app = express();
const path = require("path");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
const students = [
    {
        id: 1,
        name :"Anurag",
    },
    {
        id:2,
        name:"Darshan"
    },
    {
        id:3,
        name:"Adarsh"
    },
    {
        id:4,
        name:"Ram"
    },
    {
        id:5,
        name:"Krishna"
    },
];


app.get("/",(req,res)=>{
   res.sendFile(path.join(__dirname,"/index.html"));
});

app.get("/students",(req,res)=>{
    res.send(students);
});

app.get("/student/:id",(req,res)=>{
    // console.log(req.params);
    const stu_id = req.params.id;
    const data = students[stu_id-1].name;
    res.send(data);
});

app.post("/add-student",(req,res)=>{
     const tempData = req.body;
     students.push(tempData);
     console.log(students);
     res.send("Data saved sucessfully!");
});

app.post("/delete-student/:id",(req,res)=>{
    const stu_id = req.params.id;
    console.log(stu_id);
    students.splice(stu_id-1,1); 
    console.log(students);
    res.send("deleted successfully!");
})

app.put("/update-student/:id",(req,res)=>{
        const data = req.body;
        const stu_id = req.params.id;
        console.log(data);
        students[stu_id-1] = data;
        console.log(students);
        res.send("Data updated successfully!");
});

app.listen(3000,(req,res)=>{
    console.log("Listening port on 3000, Jai Shree Ram Jai Shree Hanuman Om Namah Shivaya");
})