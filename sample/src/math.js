// IIFE 방식의 모듈
// var math = math || {};

// (function () {
//     function sum(a, b) {
//         return a + b;
//     }

//     math.sum = sum;
// })();

// ES2015 표준 모듈 시스템
export function sum(a, b) {
    return a + b;
}
