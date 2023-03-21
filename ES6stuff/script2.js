var winBattle = true;

var experiencePoints = winBattle ? 10 : 1;

var winBattle;

function setWin(outcome) {
  switch (outcome) {
    case "win":
      winBattle = true;
      break;
    case "lose":
      winBattle = false;
      break;
    default:
      winBattle = "invalid answer";
  }
  return winBattle;
}
