<?php
class Calculator {
	public function calculate (Operator $operator, float $a, float $b):float {
        return $operator->operate($a, $b);
    }
}
interface Operator {
	public function operate(float $a, float $b);
}
class Addition implements Operator {
	public function operate (float $a, float $b): float {
		return $a + $b;
	}
}
class Division implements Operator {
	public function operate (float $a, float $b) {
		if ($b == 0) {
            throw new Exception('Division by zero');
        }
        return $a / $b;
	}
}
$cal = new Calculator();
echo $cal->calculate( new Addition(), 2 ,3);
try {
    $cal->calculate( new Division(), 2 ,0);
} catch(Exception $e) {
        echo 'Result: ' .$e->getMessage();
      }

?>