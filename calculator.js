const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// Calculator GET request
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

// Calculator POST request
app.post("/", function(req, res) {

  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);

  let result = num1 + num2;

  res.send(`The sum of the calculation is: ${result}`);
});

// BMI Calculator GET request
app.get("/bmiCalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

// BMI Calculator POST request
app.post("/bmiCalculator", function(req, res) {

  // Calculation Code
  let weight = Number(req.body.weight);
  let height = Number(req.body.height) * 0.01;
  let bmi = parseFloat(weight / (height ** 2));
  let msg = "";

  if (bmi < 18) {
    msg = `You are underweight. Please consult your Doctor.`
  } else if (bmi >= 18 && bmi <= 24.9) {
    msg = `Your weight is in the normal range. Keep it up!`
  } else {
    msg = `You are overweight. Please consult your Doctor.`
  }

  res.send(
    `<div style="text-align: center; padding-top: 5rem">
      <p>The Weight you entered is: <h2>${weight}kg.</h2></p>
      <p>The Height you entered is: <h2>${height * 100}cm.</h2></p>
      <p>Your calculated Body Mass Index is: <h1>${bmi}</h1></p>
      <h3>${msg}</h3>
    </div>`
  );
});

// App listener
app.listen(3000, function(){
  console.log("Server running at http://localhost:3000");
})
