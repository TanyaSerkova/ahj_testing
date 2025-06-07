export default function LuhnAlgorithm(setValue) {
  let char = 0;
  const number = String(setValue).replace(/\D/g, "");
  const isOdd = number.length % 2 !== 0;

  if ("" === number) return false;

  for (let i = 0; i < number.length; i++) {
    let n = parseInt(number[i], 10);

    char += (isOdd | 0) === i % 2 && 9 < (n *= 2) ? n - 9 : n;
  }

  return 0 === char % 10;
}
