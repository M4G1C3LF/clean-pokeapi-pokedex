import { IError } from "../../../shared/types/IError";

export class GenericError implements IError {
  code: number;
  message: string;
  error: any;
  index?: number;
  constructor(args: {
    message: string;
    code: number;
    error?: any;
    index?: number | undefined;
  }) {
    this.code = args.code;
    this.message = args.message;
    this.error = args.error;
    this.index = args.index;
		
    console.log("==== GENERIC ERROR", {
      message: this.message,
      code: this.code,
      error: this.error,
      index: this.index,
    });
    console.trace();
		
  }

  getMessage() {
    return `ErrorCode: ${this.code}. ${this.message} ${
      this.index !== undefined ? `at index ${this.index} ` : ""
    }`;
  }
  getLogMessage() {
    return `${this.getMessage()} - ${this.error && JSON.stringify(this.error)}`;
  }
}
