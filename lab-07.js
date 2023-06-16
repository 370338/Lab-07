class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CustomError';
    }
}
  
function throwGenericError() {
    throw new Error('Generic error');
}
  
function throwCustomError() {
    throw new CustomError('Custom error');
}
  
try {
    console.log('Force generic error');
    try {
      console.log('Generic error try block');
      throwGenericError();
    } catch (error) {
      console.log('Generic error catch block');
      console.error('Error:', error.message);
    } finally {
      console.log('Generic error finally block');
    }
} catch (error) {
    console.error('Outer error:', error.message);
}
  
/*console.log();*/
  
try {
    console.log('Force custom error');
    try {
      console.log('Custom error try block');
      throwCustomError();
    } catch (error) {
      console.log('Custom error catch block');
      console.error('CustomError:', error.message);
    } finally {
      console.log('Custom error finally block');
    }
} catch (error) {
    console.error('Outer error:', error.message);
}
