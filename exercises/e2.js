// FUNCTIONS: arguments and return
// BEFORE YOU START: please read the /exercises-info/e2.md file.

/**
 * ====================================================
 * Create a function that works as follows:
   * The function name is 'rectArea'
   * The function returns the value of the area of a rectangle (sideA * sideB)
   * The function takes 2 parameters (two sides) to calculate the area from
 * rectArea(3, 2) => 6
*/

// Your function code starts here...
function rectArea(sideA, sideB) {
  return sideA * sideB;
}

// Example usage:
const area = rectArea(3, 2);
console.log(area);
// Output: 6



// Use the function you created above to calculate the areas of 3 rooms
// Assign the results to room1, room2, and room3 variables
// Data for calculation: room1: 4 by 6, room2: 13 by 3, room3: 4 by 8

// Your code goes here:
// Define the dimensions of the rooms
const room1Dimensions = { sideA: 4, sideB: 6 };
const room2Dimensions = { sideA: 13, sideB: 3 };
const room3Dimensions = { sideA: 4, sideB: 8 };

// Calculate the areas using the rectArea function
const room1 = rectArea(room1Dimensions.sideA, room1Dimensions.sideB);
const room2 = rectArea(room2Dimensions.sideA, room2Dimensions.sideB);
const room3 = rectArea(room3Dimensions.sideA, room3Dimensions.sideB);

// Display the results
console.log('Area of Room 1:', room1); // Output: Area of Room 1: 24
console.log('Area of Room 2:', room2); // Output: Area of Room 2: 39
console.log('Area of Room 3:', room3); // Output: Area of Room 3: 32



/**
 * =============================================================
 * Create a function that works as follows:
 * The function name is 'totalRoomsArea'
 * The function takes 3 arguments (3 rooms area values)
 * The function returns the total area of 3 rooms
 * totalRoomsArea(area1, area2, area3) => Number
 * totalRoomsArea(24, 35, 24) => 83
 */

// Your code goes here...
function totalRoomsArea(area1, area2, area3) {
  return area1 + area2 + area3;
}

// Example usage:
const totalArea = totalRoomsArea(24, 35, 24);
console.log(totalArea);
// Output: 83



// Make the function call in the parentheses of the console.log statement.
// Use room1, room2, room3 variables as arguments for the function call
const result = function () {
    console.log(totalRoomsArea(room1, room2, room3));
}

result();

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-2"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


// Do not delete or change the lines beneath
const f = {
    rectArea: rectArea || undefined,
    roomVars: [room1 || undefined, room2 || undefined, room3 || undefined],
    totalRoomsArea: totalRoomsArea || undefined,
    result: (room1 && room2 && room3) ? result : undefined,
}
export { f };
