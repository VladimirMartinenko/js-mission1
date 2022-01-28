/*const meaning = prompt("введите + - * /");
const number1 = +prompt("введите первую цыфру");
const number2 = +prompt("введите вторую цыфру");
switch (meaning) {
  case "+": {
    alert(number1 + number2);
    break;
  }
  case "-": {
    alert(number1 - number2);
    break;
  }
  case "*": {
    alert(number1 * number2);
    break;
  }
  case "/": {
    alert(number1 / number2);
    break;
  }
  default: {
    alert("введите корректные данные");
  }
}*/

/*const color = prompt("введите цвет");
if (color === "красный") {
  console.log("стой");
} else if (color === "жёлтый") {
  console.log("приготовится");
} else {
  console.log("иди");
}*/

const isSeason = function (month) {
  if (month >= 1 && month <= 2 && month === 12) {
    return "winter";
  } else if (month >= 3 && month <= 5) {
    return "spring";
  } else if (month >= 6 && month <= 8) {
    return "summer";
  } else if (month >= 9 && month <= 11) {
    return "autumm";
  } else {
    return "enter a valid value";
  }
};
const meaning = +prompt("введите месяц цыфрами");
const result = isSeason(meaning);
console.log(result);
