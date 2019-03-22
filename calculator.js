class Operator {
    operate() {}
}
class Calculator {
    calculate(operator, firstNum, secondNum) {
        return operator.operate(firstNum, secondNum)
    }
}
class Addition extends Operator {
    operate(firstNum, secondNum) {
        return firstNum + secondNum
    }
}
class Division extends Operator {
    operate(firstNum, secondNum) {
        if (secondNum == 0) {
            throw 'Division by zero'
        } else 
        return firstNum / secondNum
    }
}
let cal = new Calculator();
try {
    console.log(cal.calculate(new Division(), 2, 0));
} catch (error) {
    console.log(error)
}
