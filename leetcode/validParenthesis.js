// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:
// Input: "()"
// Output: true

// Example 2:
// Input: "()[]{}"
// Output: true

// Example 3:
// Input: "(]"
// Output: false

// Example 4:
// Input: "([)]"
// Output: false

// Example 5:
// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length === 1) return false;
  if (s.length < 1) return true;
  let stack = [];
  let map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");
  for (p of s) {
    if (p === "(" || p === "{" || p === "[") {
      stack.push(p);
    } else if (p === ")" || p === "}" || p === "]") {
      if (map.get(stack.pop()) != p) {
        return false;
      }
    }
  }
  if (stack.length > 0) return false;
  return true;
};

//Beats 83%
