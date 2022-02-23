stringLength = (string) => {
    if(string.length < 1){
      throw ('String cannot contain ZERO character')
    } else if (string.length > 10){
      throw ('String cannot contain more than TEN characters')
    }
    return string.length;
  }
  
  module.exports = stringLength;
  