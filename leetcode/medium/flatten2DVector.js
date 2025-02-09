// 251. Flatten 2D Vector
// Medium
// Design an iterator to flatten a 2D vector. It should support the next and hasNext operations.

// Implement the Vector2D class:

// Vector2D(int[][] vec) initializes the object with the 2D vector vec.
// next() returns the next element from the 2D vector and moves the pointer one step forward. You may assume that all the calls to next are valid.
// hasNext() returns true if there are still some elements in the vector, and false otherwise.

// Example 1:

// Input
// ["Vector2D", "next", "next", "next", "hasNext", "hasNext", "next", "hasNext"]
// [[[[1, 2], [3], [4]]], [], [], [], [], [], [], []]
// Output
// [null, 1, 2, 3, true, true, 4, false]

// Explanation
// Vector2D vector2D = new Vector2D([[1, 2], [3], [4]]);
// vector2D.next();    // return 1
// vector2D.next();    // return 2
// vector2D.next();    // return 3
// vector2D.hasNext(); // return True
// vector2D.hasNext(); // return True
// vector2D.next();    // return 4
// vector2D.hasNext(); // return False

// Constraints:

// 0 <= vec.length <= 200
// 0 <= vec[i].length <= 500
// -500 <= vec[i][j] <= 500
// At most 105 calls will be made to next and hasNext.

// Follow up: As an added challenge, try to code it using only iterators in C++ or iterators in Java.

/**
 * @param {number[][]} vec
 */
var Vector2D = function (vec) {
  this.vec = vec;
  this.row = 0;
  this.col = 0;
};

/**
 * we can assume that the next element is always valid
 * @return {number}
 */
Vector2D.prototype.next = function () {
  const result = this.vec[this.row][this.col];
  // if the final element in the row hasn't been reached, move to the next element
  if (this.col < this.vec[this.row].length) {
    this.col++;
  }
  // if the final element in the row has been reached, move to the next row and reset the column
  if (this.col >= this.vec[this.row].length && this.row < this.vec.length) {
    this.row++;
    this.col = 0;
  }
  return result;
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function () {
  if (this.row >= this.vec.length) return false;
  // while the current row is empty, move to the next row, but don't go out of bounds
  while (!this.vec[this.row].length && this.row < this.vec.length - 1)
    this.row++;
  // if the final element in the row hasn't been reached, return true
  if (this.col < this.vec[this.row].length) return true;
  return false;
};

/**
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const obj = new Vector2D([[1, 2], [3], [4]]);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.hasNext());
console.log(obj.hasNext());
console.log(obj.next());
console.log(obj.hasNext());

const obj2 = new Vector2D([[], [3]]);
console.log(obj2.hasNext());
console.log(obj2.next());
console.log(obj2.hasNext());
