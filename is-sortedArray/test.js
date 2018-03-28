/*
 * @Author: zhouxcn 
 * @Date: 2018-03-28 19:01:47 
 * @Last Modified by: zhouxcn
 * @Last Modified time: 2018-03-28 19:08:50
 */
// 测试
const isArraySorted = require('./index');
let arr1 = 'string';
console.log(isArraySorted(arr1)); // false
let arr2 = [1, 2, 3];
console.log(isArraySorted(arr2)); // true
let arr3 = [3, 2, 1];
console.log(isArraySorted(arr3)); // false
// 自定义从大到小排列方法
const fn = (a, b) => b - a;
console.log(isArraySorted(arr3, fn)); // true