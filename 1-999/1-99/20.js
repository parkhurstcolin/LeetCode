/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = s.split('');
    let set = new Set(['()', '[]', '{}'])
    let stack = [];
    while(s.length > 0){
        stack.push(s.shift());
        let open = stack.length - 2;
        let close = stack.length - 1;
        if(set.has(stack[open] + stack[close])){
            stack.pop();
            stack.pop();
        }
    }
    return stack.length == 0 ? true : false;
};