// jshint esversion:6
// require express package
const express = require("express");
// require body parser package
const bodyParser = require("body-parser"); // allow us to pass information that we get sent from the post request

// a app us express module
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));


// create a home route
// a call back function with request and response
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html"); // sendFile() provide a path to reach this index.html file
}); // __dirname  : a constant that allows us to grab the current file location

app.post("/", function (req, res) {
    var num1 = Number(req.body.n1); // use the name attributes to grab the value inside that input
    var num2 = Number(req.body.n2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result + ".");
});


// start up server use app.listen()
// listen on port 3000 and have a call back
app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});
















// app.post("/", function (req, res) {



//     var weight = Number(req.body.weight);

//     var height = Number(req.body.height);

//     var bmi = Math.floor(weight / Math.pow(height, 2));
//     // send back the response



//     if (bmi <= 18.5) {



//         res.send(bmi + "<h1>Your BMI is to low.</h1>");

//     }
//     if (bmi > 18.5 && bmi < 24.9) {


//         res.send(bmi + "<h1>Your BMI is normal.</h1>");

//     }
//     if (bmi > 24.9) {


//         res.send(bmi + "<h1>Your BMI is too high.</h1>");

//     }

// });



// app.listen(3000, function () {

//     console.log("Server running on port 3000");

// });