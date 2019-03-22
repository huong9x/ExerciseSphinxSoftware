class Operator {
    operate() {}
}
class Calculator {
    constructor() {
        this.operators = {
            '+' : new Addition(),
            '/' : new Division()
        };
    }
    do(operator, firstNum, secondNum) {
        if (!this.operators.hasOwnProperty(operator)) {
            throw "Comming soon!"
        } else
        return this.operators[operator].operate(firstNum, secondNum)
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
    console.log(cal.do('/', 2, 0));
} catch (error) {
    console.log(error)
}
