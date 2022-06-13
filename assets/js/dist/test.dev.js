"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var quickSort = function quickSort(arr) {
  if (arr.length <= 1) return arr;
  var centerIndex = Math.floor(arr.length / 2);
  var center = arr.splice(centerIndex, 1);
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    arr[i] < center ? left.push(arr[i]) : right.push(arr[i]);
  }

  return [].concat(_toConsumableArray(quickSort(left)), _toConsumableArray(center), _toConsumableArray(quickSort(right))); // return quickSort(left).concat(center).concat(quickSort(right));
};

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort(arr));