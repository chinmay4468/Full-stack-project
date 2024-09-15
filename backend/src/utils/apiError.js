class ApiError extends Error {
    constructor(
      statusCode,
      message = "Something went wrong",
      errors = [],
      stack = ""
    ) {
      super(message); // Initializes the Error parent class with the message
      this.statusCode = statusCode; // Custom property for storing the status code
      this.data = null; // Initialize additional data as null
      this.message = message; // Custom message (optional, as super already sets this)
      this.errors = errors; // Array to store error details
  
      // Handling the stack trace
      if (stack) {
        this.stack = stack; // If a stack is provided, use it
      } else {
        Error.captureStackTrace(this, this.constructor); // Automatically capture the stack trace
      }
    }
  }
  export {ApiError}