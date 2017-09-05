/*
// Question 16 - Extra Credit

// Repeat question 15, but assume pools 2 and 10 aren't operational.

// Repita la pregunta 15, pero considere que las agrupaciones 2 y 10 no están operativas.
var totalPools = 12
var currentPool = 1
var smallVolume = 1000
var largeVolume = 3000
var totalVolume = 0
for ( ;   ;  ) {

}
*/

var totalPools = 12
var currentPool = 1
var smallVolume = 1000
var largeVolume = 3000
var totalVolume = 0

var smallPools = 6;
var largePools = 4;

var i = 0;

for (i = 0; i < currentPool; i++) {
totalPools = (smallPools + largePools);
totalVolume = (smallPools * smallVolume) + (largePools * largeVolume);

console.log(totalVolume + ` gals. were required to fill ` + totalPools + ` pools today`);

}