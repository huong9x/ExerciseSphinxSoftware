<?php
    class ElectricBill{
        public $level = [];
        public function register(Electric_Level $electric_level){
            array_push($this->level, $electric_level);
        }

        public function operateElectricBill($n1, $n2){
            for($i = 0; $i < count($this->level); $i++){
                if($this->level[$i]->canHandle($n2 - $n1)){
                    return $this->level[$i]->operate($n1, $n2);
                }
            }
        }
    }

    interface Electric_Level{
        public function canHandle($num);
        public function operate($n1, $n2);
    }


    class LevelOne implements Electric_Level{

        public function canHandle($num){
            if($num <= 50){
                return true;
            }else{
                return false;
            }
        }

        public function operate($n1, $n2){
            return ($n2 - $n1) * 3500;
        }
    }

    class LevelTwo implements Electric_Level{

        public function canHandle($num){
            if($num > 50 && $num <= 80){
                return true;
            }else{
                return false;
            }
        }

        public function operate($n1, $n2){
            return ($n2 - $n1) * 4000;
        }
    }

    $bill = new ElectricBill();
    $bill->register(new LevelOne);
    $bill->register(new LevelTwo);
    print_r($bill->operateElectricBill(0, 40));
    print_r ('\n');
    print_r($bill->operateElectricBill(60, 130));
?>