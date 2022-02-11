module.exports = function check(str, bracketsConfig) {
  function check(str, bracketsConfig){
    let openBracket = [];
    let closeBracket = [];
    let commonBracket = [];
    let sameBracket = [];
    bracketsConfig.forEach(array => { array[0] === array[1] ? sameBracket.push(array[0]) : commonBracket.push(array);
    });
    commonBracket.forEach(array => { 
        openBracket.push(array[0])
        closeBracket.push(array[1]);
    });
    
    let stack = [];
     for (let i = 0; i < str.length; i++) {
      if ( openBracket.includes(str[i])) {
       stack.push(str[i]);
       }
      else if (closeBracket.includes(str[i])){
        if (stack.length !== 0 ){
           for (let j = 0; j < openBracket.length; j++) {
            let stackItem = stack[stack.length - 1];
            if (stackItem === openBracket[j] && str[i] === closeBracket[j]) {
              stack.pop();
            }
          } 
        } else return false;
      }
      else if (sameBracket.includes(str[i])) {
        stack.push(str[i]);
        let stackItem = stack[stack.length - 1];
        if (stack.length >= 2 && stackItem === stack[stack.length - 2]) {
            stack.pop();
            stack.pop();
        }
      }
    }
    return stack.length === 0;
  }
}
