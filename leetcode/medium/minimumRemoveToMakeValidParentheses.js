/* 
1249. Minimum Remove to Make Valid Parentheses
Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.

Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"
Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.

Constraints:

1 <= s.length <= 105
s[i] is either '(' , ')', or lowercase English letter. 

*/

var minRemoveToMakeValid = function (s) {
  const stack = [];
  let removeIdxs = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(") stack.push(i);
    else if (char === ")") {
      const lastP = s[stack.pop()];
      if (lastP !== "(") removeIdxs.push(i);
    }
  }
  removeIdxs = new Set(removeIdxs.slice().concat(stack));
  let newStr = "";
  for (let i = 0; i < s.length; i++) {
    if (!removeIdxs.has(i)) {
      newStr += s[i];
    }
  }
  return newStr;
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
console.log(minRemoveToMakeValid("a)b(c)d"));
console.log(minRemoveToMakeValid("))(("));
