"use strict";

function nonUniqueElements(arr) {
    var res = [];
    
    for (var i=0; i < arr.length; i++) {
    	if(containsIndex(arr, arr[i]).length >= 2) {
        	res.push(arr[i]);
        }
	}
	return res;
}

function containsIndex(arr, elem) {
    var res = [];
    for(var i=0; i< arr.length; i++) {
    	if(arr[i] == elem) {
        	res.push(i);
        }
    }
    return res;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

