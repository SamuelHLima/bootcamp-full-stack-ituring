
let Numeros = [2, 77, 107, 0, 14, 15];

Numeros.sort(function (X,Y) {
  if(X > Y) return 1;
  if(X < Y) return -1;
  return 0 ;  
})
console.log(Numeros);