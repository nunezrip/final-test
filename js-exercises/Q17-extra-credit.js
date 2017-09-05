// Question 17 - Extra Credit
/*
The engineer knows that pools 2, 6 and 10 won't work tomorrow.
Besides, pool number 12 will be filled with half the volume in order to
accommodate children. Go ahead and build tomorrow's report today, so you can
rest easy.
----
El ingeniero sabe que manana las picsinas 2, 6, y 10 no van a trabajar.
Ademas, la picina numero 12 la van a llenar con la mitad del volumen, para
ninos pequenos. Adelantese y haga el reporta hoy, para que manana descanse
*/

var totalPools = 12
var currentPool = 1
var smallVolume = 1000
var largeVolume = 3000
var totalVolume = 0

var smallPools = 5;
var largePools = 4;

var i = 0;

for (i = 0; i < currentPool; i++) {
totalPools = (smallPools + largePools);
totalVolume = (smallPools * smallVolume) + (largePools * largeVolume);

console.log(totalVolume + ` gals. were required to fill ` + totalPools + ` pools today`);

}