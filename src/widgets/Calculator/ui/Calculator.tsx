import React, { useState } from "react";
import { Screen } from "entities/Screen";
import { Buttons } from "features/Buttons";
import cls from "./Calculator.module.scss";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [newNumber, setNewNumber] = useState<number>(0);
  const [operationActive, setOperationActive] = useState<string>("");

  const handleClick = (value: string) => {
    if (!value) return;

    if (Number(value)) {
      setNewNumber(Number(String(newNumber) + value));
    } else if (value === "=") {
      if (!operationActive) return;

      let updatedResult = result;
      switch (operationActive) {
        case "+":
          updatedResult += newNumber;
          break;
        case "-":
          updatedResult -= newNumber;
          break;
        case "/":
          updatedResult /= newNumber;
          break;
        case "x":
          updatedResult *= newNumber;
          break;
        default:
          return;
      }

      setResult(updatedResult);
      setNewNumber(updatedResult);
      setOperationActive("");
    } else {
      setResult(newNumber);
      setNewNumber(0);
      setOperationActive(value);
    }
  };

  return (
    <div className={cls.calculatorWrapper}>
      <Screen text={newNumber ? newNumber : result} />
      <Buttons onClick={handleClick} />
    </div>
  );
};

export default Calculator;
