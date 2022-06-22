// IIFE 방식의 모듈
//console.log(math.sum(1, 2));

// ES2015 표준 모듈 시스템
// import * as math from "./math";
// console.log(math.sum(1, 2));
import { sum } from "./math.js";
console.log(sum(1, 2));