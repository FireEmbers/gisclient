var cconv= require('cconv');

var postgisClient = require('./../index');

var sridA = 4258;
var sridB = 3035;

var cA = [ 41 + 46.0 / 60 + 41.88 /3600, - (8 +  9.0 / 60 + 4.39/3600)];

var f = true;

cB = cconv(sridA, sridB, cA, f);

var length = 4000;
var width = 4000;

var W = cB[0] - length/2;
var E = cB[0] + length/2;
var N = cB[1] + width/2;
var S = cB[1] - width/2;

console.log('var W = ',W+';');
console.log('var E = ',E+';');
console.log('var N = ',N+';');
console.log('var S = ',S+';');


var rows = 10;
var cols = 10;

console.log('map length:', E-W);
console.log('map height:', N-S);


var boundaries = {
  north: N,
  south: S,
  east: E,
  west: W,
  r: rows,
  c: cols};

postgisClient(boundaries, 'grass', function(data){console.log(data)});