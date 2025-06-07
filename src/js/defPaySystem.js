import { arrPaySystem } from "./paySystem";

export default function defPaySystem(setValue) {
  const arrIdx = [];
  if (setValue.length === 1) {
    switch (setValue) {
      case "4":
        arrIdx.push(arrPaySystem.indexOf("visa"));
        break;
      case "2":
        arrIdx.push(arrPaySystem.indexOf("mastercard"));
        arrIdx.push(arrPaySystem.indexOf("mir"));
        break;
      case "3":
        arrIdx.push(arrPaySystem.indexOf("amex"));
        arrIdx.push(arrPaySystem.indexOf("jcb"));
        arrIdx.push(arrPaySystem.indexOf("diners"));
        break;

      case "5":
        arrIdx.push(arrPaySystem.indexOf("mastercard"));
        arrIdx.push(arrPaySystem.indexOf("diners"));
        break;
      case "6":
        arrIdx.push(arrPaySystem.indexOf("discover"));
        break;
      default:
        arrIdx.push("Неизвестная платежная система");
        break;
    }
    return arrIdx;
  } else {
    if (setValue.substr(0, 2) === "22") {
      if (setValue.length === 2) {
        arrIdx.push(arrPaySystem.indexOf("mastercard"));
        arrIdx.push(arrPaySystem.indexOf("mir"));
        return arrIdx;
      } else {
        const thirdSymbols = setValue.substr(0, 3);
        switch (thirdSymbols) {
          case "220":
            arrIdx.push(arrPaySystem.indexOf("mir"));
            break;
          case "221":
          case "222":
          case "223":
          case "224":
          case "225":
          case "226":
          case "227":
          case "228":
          case "229":
            arrIdx.push(arrPaySystem.indexOf("mastercard"));
            break;
        }
        return arrIdx;
      }
    }
    const twoSymbols = setValue.substr(0, 2);
    switch (twoSymbols) {
      case "60":
      case "62":
      case "64":
      case "65":
        arrIdx.push(arrPaySystem.indexOf("discover"));
        break;
      case "34":
      case "37":
        arrIdx.push(arrPaySystem.indexOf("amex"));
        break;
      case "35":
        arrIdx.push(arrPaySystem.indexOf("jcb"));
        break;
      case "23":
      case "24":
      case "25":
      case "26":
      case "27":
      case "51":
      case "52":
      case "53":
      case "55":
        arrIdx.push(arrPaySystem.indexOf("mastercard"));
        break;
      case "30":
      case "36":
      case "54":
        arrIdx.push(arrPaySystem.indexOf("diners"));
        break;
      default:
        arrIdx.push("Неизвестная платежная система");
        break;
    }
    return arrIdx;
  }
}
