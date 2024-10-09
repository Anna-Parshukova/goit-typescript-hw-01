function showMessage(message: string):void {
  console.log(message);
}

function calc(num1: number, num2: number):number {
  return num1 + num2;
}

function customError():never {
  throw new Error('Error');
}

showMessage('Hi!');
calc(3, 44);
customError();