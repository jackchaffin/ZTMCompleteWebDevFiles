const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

let newArray = [];
array.forEach((user) => {
  let { username } = user;
  username = username + "!";
  newArray.push(username);
});

const mapArray = array.map((user) => {
  let { username } = user;
  return `${username}?`;
});

const filterArray = array.filter((user) => {
  let { team } = user;
  return team === "red";
});

const reduceArray = array.reduce((accumulator, user) => {
  const { score } = user;
  return accumulator + score;
}, 0);

const answer = array.map((user) => {
  user.items = user.items.map((item) => {
    return item + "!";
  });
  return user;
});
console.log(answer);
