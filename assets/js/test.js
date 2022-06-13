var quickSort = function(arr) {
  if(arr.length <= 1) return arr;

  const centerIndex = Math.floor(arr.length / 2);
  const center = arr.splice(centerIndex, 1)[0];
  const left = []; 
  const right = [];
  for(let i = 0; i < arr.length; i++) {
    arr[i] < center ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [...quickSort(left), center, ...quickSort(right)];
};

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(quickSort(arr));