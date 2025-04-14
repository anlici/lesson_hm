function isValid(s) {
    let stack = [];
    let map = {
        '(':')',
        '{':'}',
        '[':']'
    }

    for(let char of s) {
        if(char in map) {
            stack.push(map[char]); // 记录右边括号
        } else {
            if(stack.pop() !== char) return false;
        }
    }

    return !stack.length; // 栈为空，则为true
}