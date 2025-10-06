function calculate(event) {
  event.preventDefault();

  // GETTING ELEMENT FROM HtMl //
  let name = document.getElementById("name").value;
  let weightKg = Number(document.getElementById("weight").value);
  let heightM = Number(document.getElementById("height").value);
  let result = document.getElementById("result");

  // ARITHMETIC OPERATION //
  let heightSquared = heightM * heightM;
  let bmi = weightKg / heightSquared;

  // CHECK CATEGORIES //
  let message = `${name}, your BMI is <b>${bmi.toFixed(2)}</b>. <br>`;
  
 //LOGICAL OPERATION //
  if (bmi < 18.5) {
    message += "You are underweight.";
    console.log("underweight");
  } else if (bmi >= 18.5 && bmi < 25) {
    message += "You have a normal weight.";
    console.log("normal weight");
  } else {
    message += "You are overweight.";
    console.log("you are overweight");
  }

  // HIGH RISK CHECK //
  if (bmi >= 25 || weightKg > 90) {
    message += " High Risk Alert!";
    console.log("high risk")
  }

  result.innerHTML = message;
}
