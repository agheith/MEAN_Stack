// ========================================
//
//                 ANSWER
//
// ========================================


/*
  Goal for these first 'easy' difficulty level assignments:
  returns versus void returns
*/

function runningLogger(){
  console.log("I am running");
}
runningLogger();

// ========================================

function multiplyBy10(number){
  if (typeof(number) == "number"){
    return number*10;
  }
}
console.log(multiplyBy10(5));

// ========================================

function stringReturnOne(){
  return "cat";
}
console.log(stringReturnOne());

// ========================================

function stringReturnTwo(){
  return "dog";
}
console.log(stringReturnTwo());

// ========================================


function myFunctionRunner(param){
  if (typeof(param)=='function'){
    param();
  }
}
// Somewhat interesting right?
myFunctionRunner(stringReturnOne);

function myDoubleConsoleLog(param1,param2){
  if (typeof(param1) == 'function' && typeof(param2) == 'function'){
    console.log(param1(), param2());
  }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);
// If return statement is not there, JavaScript will automatically return undefined
//
//
//
//
// // more interesting, we hope!
// function caller2(param){
//   console.log('starting');
//   var x = setTimeout(function(){
//     if (typeof(param)=='function'){
//       // notice the passed parameters...
//       param(stringReturnOne, stringReturnTwo);
//     }
//   }, 2000);
//   console.log('ending');
//   return "interesting";
// }
//
// caller2(myDoubleConsoleLog);

// ========================================

// function caller2(someParam){
//     console.log("Starting ...");
//     setTimeout (function(){
//         if (typeof someParam === "function"){
//             someParam();
//         }
//     }, 2000);
//     console.log("Ending?");
//     return "interesting";
// }
// caller2(myDoubleConsoleLog);
