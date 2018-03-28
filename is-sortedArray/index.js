/*
 * @Author: zhouxcn 
 * @Date: 2018-03-28 18:52:07 
 * @Last Modified by: zhouxcn
 * @Last Modified time: 2018-03-28 19:06:21
 */
// 默认的比较方法，从小到大顺序排列
const defaultComparator = (a, b) => a - b;
// 验证方法
// 第一个参数为待验证的数组，必选参数
// 第二个参数为比较方法，默认为defaultComparator
const isSortedArray = (array, comparator = defaultComparator) => {
    if (!Array.isArray(array)) {
        return false;
    }
    // 原理为遍历数组，如果存在不符合比较方法的数据，返回false
    const length = array.length;
    for (let i = 1; i < length; i++) {
        if (comparator(array[i - 1], array[i]) > 0) {
            return false;
        }
        return true;
    }
};
module.exports = isSortedArray;