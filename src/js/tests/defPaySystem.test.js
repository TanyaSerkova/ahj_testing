import defPaySystem from "../defPaySystem";

test.each([
  ["with 4", "4", [0]],
  ["with 2", "2", [1, 2]],
  ["with 3", "3", [3, 4, 5]],
  ["with 5", "5", [1, 5]],
  ["with 6", "6", [6]],
  ["with 7", "7", ["Неизвестная платежная система"]],
])("testing 1 symbol %s", (_, str, expected) => {
  const result = defPaySystem(str);
  expect(result).toEqual(expected);
});

test.each([
  ["with 60", "6025", [6]],
  ["with 62", "6225", [6]],
  ["with 64", "6425", [6]],
  ["with 65", "6525", [6]],
  ["with 22", "22", [1, 2]],
  ["with 34", "3458", [3]],
  ["with 37", "3758", [3]],
  ["with 35", "3524", [4]],
  ["with 23", "2356", [1]],
  ["with 24", "2456", [1]],
  ["with 25", "2556", [1]],
  ["with 26", "2656", [1]],
  ["with 27", "2756", [1]],
  ["with 51", "5143", [1]],
  ["with 52", "5243", [1]],
  ["with 53", "5343", [1]],
  ["with 55", "5543", [1]],
  ["with 30", "3021", [5]],
  ["with 36", "368", [5]],
  ["with 54", "5412", [5]],
  ["with 20", "201", ["Неизвестная платежная система"]],
])("testing > 1 symbol %s", (_, str, expected) => {
  const result = defPaySystem(str);
  expect(result).toEqual(expected);
});

test.each([
  ["with 220", "2201", [2]],
  ["with 221", "2212", [1]],
  ["with 222", "2226", [1]],
  ["with 223", "2236", [1]],
  ["with 224", "2246", [1]],
  ["with 225", "2256", [1]],
  ["with 226", "2266", [1]],
  ["with 227", "2276", [1]],
  ["with 228", "2286", [1]],
  ["with 229", "2296", [1]],
])("testing > 2 symbol %s", (_, str, expected) => {
  const result = defPaySystem(str);
  expect(result).toEqual(expected);
});
