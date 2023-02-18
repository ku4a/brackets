module.exports = function check(str, bracketsConfig) {
    let rules = {};
    let stack = [];

    bracketsConfig.forEach(function (item) {
        rules[item[1]] = item[0];
    });
    for (let char of str) {
        if (char in rules) {
            if (char === rules[char]) {
                if (stack[stack.length - 1] === char) {
                    stack.pop();
                } else {
                    stack.push(char);
                }
            } else {
                if (stack.pop() !== rules[char]) {
                    return false;
                }
            }
        } else {
            stack.push(char)
        }
    }
    return stack.length <= 0;
}