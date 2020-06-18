/**
  * @function addNumbers
  *
  * @description example function to add to numbers
  *
  * @example addNumbers(1, 2) //-> 3
  * @example addNumbers(2, 18) //-> 20
  *
  * @param {Number} firstNumber the first number to add
  * @param {Number} secondNumber the second number to add
  *
  * @returns {Number} the result
  *
  * @testcase two valid integers
  *
@flowstart
start=>start: START
end=>end: END
opValorInicial=>operation: comunaDestino = null
comunaConExhorto=>condition: Esta comuna tiene exhorto
opAsignarValor=>operation: comunaDestino = 'La Comuna'

start->opValorInicial->comunaConExhorto
comunaConExhorto(yes)->opAsignarValor->end
comunaConExhorto(no)->end
@flowend
  */
const addNumbers = (firstNumber = 0, secondNumber = 0) => {
  return firstNumber +  secondNumber
};
