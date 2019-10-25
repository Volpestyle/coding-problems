// On an alphabet board, we start at position (0, 0), corresponding to character board[0][0].

// Here, board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"], as shown in the diagram below.

// We may make the following moves:

// 'U' moves our position up one row, if the position exists on the board;
// 'D' moves our position down one row, if the position exists on the board;
// 'L' moves our position left one column, if the position exists on the board;
// 'R' moves our position right one column, if the position exists on the board;
// '!' adds the character board[r][c] at our current position (r, c) to the answer.
// (Here, the only positions that exist on the board are positions with letters on them.)

// Return a sequence of moves that makes our answer equal to target in the minimum number of moves.  You may return any path that does so.

// Example 1:
// Input: target = "leet"
// Output: "DDR!UURRR!!DDD!"

// Example 2:
// Input: target = "code"
// Output: "RR!DDRR!UUL!R!"

// Constraints:

// 1 <= target.length <= 100
// target consists only of English lowercase letters.

/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
  const board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"];
  let answer = "";
  let currentPosition = [0, 0];
  for (let i = 0; i < target.length; i++) {
    let loc = [];
    for (let j = 0; j < board.length; j++) {
      if (board[j].includes(target[i])) {
        loc.push(j);
        loc.push(board[j].indexOf(target[i]));
      }
    }
    // Handle Edge case if location is z
    // Pretend location is actually one row above
    let flag = 0;
    if (loc[0] === 5 && currentPosition[0] !== 5) {
      flag = 1;
      loc[0] = 4;
    }
    let y = currentPosition[0] - loc[0];
    let x = currentPosition[1] - loc[1];
    while (y < 0) {
      answer += "D";
      y++;
    }
    while (y > 0) {
      answer += "U";
      y--;
    }
    while (x < 0) {
      answer += "R";
      x++;
    }
    while (x > 0) {
      answer += "L";
      x--;
    }
    // Move down into Z and set location back to real one
    if (flag) {
      answer += "D";
      loc[0] = 5;
    }
    currentPosition = loc;
    answer += "!";
  }
  return answer;
};

// Runtime: 52 ms, faster than 75.27% of JavaScript online submissions for Alphabet Board Path.
// Memory Usage: 35.4 MB, less than 100.00% of JavaScript online submissions for Alphabet Board Path.
