function sumArray(arr) {
  // arr = [1,2,3,4,5];
  // 0번 인덱스부터 -1번 인덱스전까지, 즉 0번 인덱스부터 5번 인덱스 전까지의 합 그리고 마지막 까지의 합
  if (arr.length === 1) return arr[0];
  return sumArray(arr.sliice(0, -1)) + arr[arr.length - 1];
}

sumArray([1, 2, 3, 4, 5]);
