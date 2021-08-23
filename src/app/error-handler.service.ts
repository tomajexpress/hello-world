import { ErrorHandler, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor() { }
  handleError(error: any): void {
    console.log(error);
  }
}
