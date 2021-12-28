var shootingGames = ["PUBG", "Call of Duty", "Far Cry", "Resident Evil"];
console.log(shootingGames);
var [first, ...remainingGames] = shootingGames;
console.log(first);
console.log(remainingGames);

const fullName = {
  fname: "Monmoy",
  lName: "saifullah",
};

const bioData = {
  id: 1,
  ...fullName,
  age: 27,
  gender: "Male",
};

console.log(fullName);
console.log(bioData);
