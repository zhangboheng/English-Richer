export function addMissingNumber(arr, param, _info = true) {
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
    if (_info) {
      arr.push(missingNumber);
    }
    return missingNumber;
  }
}
export function findLongestArray(array1, a, array2, b, array3, c) {
  array1 = array1 || []
  array2 = array2 || []
  array3 = array3 || []
  const length1 = array1.length;
  const length2 = array2.length;
  const length3 = array3.length;

  let longestArray;
  let sort;

  if (length1 > length2 && length1 > length3) {
    longestArray = array1;
    sort = a;
  } else if (length2 > length1 && length2 > length3) {
    longestArray = array2;
    sort = b;
  } else {
    longestArray = array3;
    sort = c;
  }

  return [longestArray, sort];
}
export function removeNegativeOneFromList(list) {
  // 检查传入的参数是否为数组类型
  if (!Array.isArray(list)) {
      throw new Error('Invalid input. Expected an array.');
  }
  list = list.filter(item => item !== -1)
  return list;
}

export function decodeArrayBuffer(buffer, encoding) {
  if (encoding === 'utf-8') {
    return utf8Decode(buffer);
  } else if (encoding === 'gbk') {
    return gbkDecode(buffer);
  } else {
    throw new Error('Unsupported encoding: ' + encoding);
  }
}

function utf8Decode(buffer) {
  const bytes = new Uint8Array(buffer);
  let result = '';
  let i = 0;

  while (i < bytes.length) {
    const byte = bytes[i++];
    if (byte < 128) {
      result += String.fromCharCode(byte);
    } else if (byte >= 192 && byte < 224) {
      const byte2 = bytes[i++];
      result += String.fromCharCode((byte - 192) * 64 + (byte2 - 128));
    } else if (byte >= 224 && byte < 240) {
      const byte2 = bytes[i++];
      const byte3 = bytes[i++];
      result += String.fromCharCode(
        (byte - 224) * 4096 + (byte2 - 128) * 64 + (byte3 - 128)
      );
    } else {
      throw new Error('Invalid UTF-8 byte');
    }
  }

  return result;
}

function gbkDecode(buffer) {
  // 实现 GBK 解码逻辑，这里只是示意性的代码，请根据实际需求实现
  // 这里假设 buffer 是一个 ArrayBuffer
  // 你可以参考第三方库或自行实现 GBK 解码逻辑
  return 'GBK decoding not implemented';
}
