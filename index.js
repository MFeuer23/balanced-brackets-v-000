function isBalanced(str) {
  if (str.length % 2 !== 0) {
    return false
  }
  
  let bracketsLeft = ["{", "[", "("]
  let bracketsRight = ["}", "}", ")"]
  
  for (let i = 0; i < str.length; i++) {
    if (bracketsLeft.indexOf(str[i]) > -1) {
      let left = bracketsLeft.indexOf(str[i])
      let right = str.indexOf(bracketsRight[left])
      if (Math.abs(left - right) % 2 !== 0) {
        return false
      } else {
        return true
      }
        
    } 
  }
}