/*const meaning1 = +prompt("введите первую цыфру");
const meaning = prompt("введите + - * /");
const meaning2 = +prompt("введите вторую цыфру");

function calculator (number1, sign, number2){
if(number1 === number1 && number2 === number2) { 
  switch (meaning) {
  case "+": {
    return number1 + number2;
    break;
  }
  case "-": {
    return number1 - number2;
    break;
  }
  case "*": {
    return number1 * number2;
    break;
  }
  case "/": {
    return number1 / number2;
    break;
  }
  default: {
    return "введите корректные данные";
  }
}
} else {
  return 'Введите корректные данные!';
};
}
const result = calculator (meaning1, meaning, meaning2);
alert(result);*/

/*const whatColor = function(meaning){
if (color === "красный") {
  return "стой";
} else if (color === "жёлтый") {
  return "приготовьтесь";
} else if (color === "зелёный") {
  return "иди";
} else {
  return 'Введите корректные данные';
}
}
const color = prompt("введите цвет");
const result = whatColor(color);
console.log(result);*/

/*const whatSeason = function (month) {
  if (month >= 1 && month <= 2) {
    return "winter";
  }else if (month === 12) {
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
const result = whatSeason(meaning);
console.log(result);*/

const season = function (month) {
  switch (month) {
    case 12:
    case 1:
    case 2: {
      return "winter";
    }
    case 3:
    case 4:
    case 5: {
      return "spring";
    }
    case 6:
    case 7:
    case 8: {
      return "summer";
    }
    case 9:
    case 10:
    case 11: {
      return "autumm";
    }
    default: {
      return "введите корректные данные";
    }
  }
};
const meaning = +prompt("введите месяц цыфрами");
const result = season(meaning);
alert(result);
