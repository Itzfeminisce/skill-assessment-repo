function bitWiseOne(arg) {
  if (arg.length != 2) {
    console.log("Array must be of length 2")
    return;
  }
  let [ent1, ent2] = arg;
  if ((ent1.length != ent2.length) && +[...ent1, ...ent2].length != 8) {
    console.log("Entries must contain 4 elements each.")
    return;
  }
  let r = []
  for (let i = 0; i < 4; i++) {
    if ((+ent1.charAt(i) + +ent2.charAt(i)) > 1) r.push(1)
    else r.push(+ent1.charAt(i) + +ent2.charAt(i))
  }
  return r;
}
console.log(bitWiseOne(["0001", "0100"]))