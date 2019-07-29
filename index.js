function isBalanced(str) {
  if (str.length % 2 !== 0) {
    return false
  }
  
  let bracketsLeft = ["{", "[", "("]
  let bracketsRight = ["}", "]", ")"]
  
  let curly = 0;
  let square = 0;
  let parenthesis = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      curly++;
    } else if (str[i] === '}') {
      curly--;
    }
    
    if (str[i] === '[') {
      square++;
    } else if (str[i] === ']') {
      square--;
    }
    
    if (str[i] === '(') {
      parenthesis++;
    } else if (str[i] === ')') {
      parenthesis--;
    }
  }
  if (curly === 0 && square === 0 && parenthesis === 0) {
    return true
  } else {
    return false;
  }
}