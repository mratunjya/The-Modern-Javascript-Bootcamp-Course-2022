let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
console.log(letters);

//Remember that reverse() mutates the original array.
//It reverses IN PLACE rather than making a copy
let song = letters.reverse().join(".");
//"R.E.S.P.E.C.T"
console.log(song);