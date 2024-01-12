
export function addMissingNumber(arr, param) {
    // 创建一个从 0 到 param - 1 的整数集合
    let fullSet = new Set([...Array(param).keys()]);
    // 检查 arr 中的每个数字，如果存在于 fullSet 中，则从 fullSet 中删除
    for (let num of arr) {
      fullSet.delete(num);
    }
    // 如果 fullSet 为空，说明 arr 已经包含了所有数字
    if (fullSet.size === 0) {
      return false;
    } else {
      // 否则，将 fullSet 转换为数组，然后随机选择一个数字添加到 arr 中
      let fullArray = Array.from(fullSet);
      let randomIndex = Math.floor(Math.random() * fullArray.length);
      let missingNumber = fullArray[randomIndex];
      arr.push(missingNumber);
      return missingNumber;
    }
  }

