import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState(null);
  const [operand, setOperand] = useState(null);

  const handleClick = (e) => {
    const value = e.target.value;
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      setOperation(value);
      setOperand(result);
      setResult(0);
    } else if (value === "=") {
      switch (operation) {
        case "+":
          setResult(operand + result);
          break;
        case "-":
          setResult(operand - result);
          break;
        case "*":
          setResult(operand * result);
          break;
        case "/":
          setResult(operand / result);
          break;
        default:
          break;
      }
      setOperand(null);
      setOperation(null);
    } else {
      setResult(result * 10 + parseInt(value));
    }
  };

  return (
    <>
      <div class="bg-gray-200 w-screen h-screen flex justify-center items-center">
        <div class="w-80 h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">
          <div class="w-auto mx-3 my-2 h-6 flex justify-between"></div>
          <div class="w-auto m-3 h-28 text-right space-y-2 py-2">
            <div class="text-gray-700">45 + (1250 x 100) / 100</div>
            <div class="text-black font-bold text-3xl">12,545</div>
          </div>
          <div class="w-auto m-1 h-auto mb-2">
            <div class="m-2 flex justify-between">
              <div class="bg-yellow-100 shadow-md rounded-2xl w-12 h-12 text-yellow-600 font-medium flex justify-center items-center cursor-pointer">
                C
              </div>
              <div class="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center cursor-pointer">
                (
              </div>
              <div class="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center cursor-pointer">
                )
              </div>
              <div class="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center cursor-pointer">
                <button value="/" onClick={handleClick}>
                  &divide;
                </button>
              </div>
            </div>
            <div class="m-2 flex justify-between">
              <div class="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center cursor-pointer">
                <button value="7" onClick={handleClick}>
                  7
                </button>
              </div>
              <div class="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center cursor-pointer">
                <button value="8" onClick={handleClick}>
                  8
                </button>
              </div>
              <div class="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center cursor-pointer">
                <button value="9" onClick={handleClick}>
                  9
                </button>
              </div>
              <div class="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center cursor-pointer">
                <button value="*" onClick={handleClick}>
                  &times;
                </button>
              </div>
            </div>
            <div class="m-2 flex justify-between">
              <div class="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center cursor-pointer">
                <button value="4" onClick={handleClick}>
                  4
                </button>
              </div>
              <div class="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center cursor-pointer">
                <button value="5" onClick={handleClick}>
                  5
                </button>
              </div>
              <div class="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center cursor-pointer">
                <button value="6" onClick={handleClick}>
                  6
                </button>
              </div>
              <div class="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center cursor-pointer">
                <button value="-" onClick={handleClick}>
                  -
                </button>
              </div>
            </div>
            <div class="m-2 flex justify-between">
              <div class="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center cursor-pointer">
                <button value="1" onClick={handleClick}>
                  1
                </button>
              </div>
              <div class="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center cursor-pointer">
                <button value="2" onClick={handleClick}>
                  2
                </button>
              </div>
              <div class="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center cursor-pointer">
                <button value="3" onClick={handleClick}>
                  3
                </button>
              </div>
              <div class="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center cursor-pointer">
                <button value="+" onClick={handleClick}>
                  +
                </button>
              </div>
            </div>
            <div class="m-2 flex justify-between">
              <div class="bg-gray-200 shadow-md rounded-2xl w-full h-12 text-black font-medium flex justify-center items-center cursor-pointer">
                <button value="0" onClick={handleClick}>
                  0
                </button>
              </div>
              <div class="flex w-full ml-3 justify-between">
                <div class="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center cursor-pointer">
                  .
                </div>
                <div class="bg-green-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center cursor-pointer">
                  <button value="=" onClick={handleClick}>
                    =
                  </button>
                </div>
              </div>
            </div>
            <div class="flex justify-center mt-5">
              <div class="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
