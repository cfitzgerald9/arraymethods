const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"]
const planetEl = document.getElementById("planets")
planets.forEach(planet =>{
planetEl.innerHTML += ` <div>${planet}</div>`
})
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

// PULLED FROM STACK OVERFLOW
// function capitalize(string) {
//     string = string.split(" ");
//     for (var i = 0, x = string.length; i < x; i++) {
//         string[i] = string[i][0].toUpperCase() + string[i].substr(1);
//     }
//     return string.join(" ");
// }
//
const capitalPlanets = planets.map(planet=>{
   return planet.replace(`${planet[0]}`, `${planet[0]}`.toUpperCase())
 })
 console.log(capitalPlanets)


    // Use the filter method to create a new array that
    // contains planets with the letter 'e'. Use the `includes()`
    // method on strings.
const planetsArray = planets.filter(planet => {
  let containsE = false

  if (planet.includes("e")) {
      containsE = true
  }

  return containsE
})
console.log(planetsArray)

