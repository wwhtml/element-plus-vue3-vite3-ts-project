var arr = [
  { name: "ww", age: 12 },
  { name: "ml", age: 13 },
];

var res = arr.map((item, index) => {
  return item.name == "ww";
});
console.log(res);
