// @flow
import { Operation } from "./../models/operation";

export class AddService {
    static addTwoNumbers(firstNumber: number, secondNumber: number): number {
        let operation: Operation;
        return firstNumber + secondNumber;
    }
    static getOperationAddTwoNumbers(firstNumber: number, secondNumber: number): Operation {
        return new Operation(firstNumber, secondNumber, firstNumber + secondNumber);
    }    
}