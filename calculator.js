class Calculator {
    add(firstNum, secondNum){
    if(!firstNum && !secondNum){
      throw('No arguments entered')
    }else if(typeof (firstNum) === 'number' && typeof(secondNum) === 'number'){
      return firstNum + secondNum;
    }
    throw("Cannot ADD 'Argument is not a number'")
  }
  
  
    subtract(firstNum, secondNum){
    if(!firstNum && !secondNum){
      throw('No arguments entered')
    }else if(typeof (firstNum) === 'number' && typeof(secondNum) === 'number'){
      return firstNum - secondNum;
    }
    throw("Cannot SUBTRACT 'Argument is not a number'")
  }
  
  
     divide(firstNum, secondNum){
    if(!firstNum && !secondNum){
      throw('No arguments entered')
    }else if(typeof (firstNum) === 'number' && typeof(secondNum) === 'number'){
      return firstNum / secondNum;
    }
    throw("Cannot DIVIDE 'Argument is not a number'")
  }
  
  
     multiply(firstNum, secondNum){
    if(!firstNum && !secondNum){
      throw('No arguments entered')
    }else if(typeof (firstNum) === 'number' && typeof(secondNum) === 'number'){
      return firstNum * secondNum;
    }
    throw("Cannot MULTIPLY 'Argument is not a number'")
  }
  }
  
  module.exports = Calculator;