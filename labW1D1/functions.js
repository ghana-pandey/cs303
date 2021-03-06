"use strict";



/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
    if(a>b &&a >c)
    return a;
    else if(b>a && b> c)
    return b
    else
    return c;
}

/**
  * @param {Array} arr of numbers
  * @returns {number} sum of arr numbers
  */
 function sum(arr){
    let tot = 0;
     for(let i=0;i<arr.length;i++){
        tot=tot+arr[i];
    }


    return tot;
 }

// /**
//  * 
//  * @param {Array} arr of numbers
//  * @returns {number} sum of arr numbers
//  */
 function multiply(arr){
    let tot = 1;
     for(let i=0;i<arr.length;i++){
         tot=tot*arr[i];
     }
     return tot;

 }

// /**
//  * @param (String) of sentences
//  * @returns  result longest length of word in string
//  */
 function findLongestWord(arr){
     let len=arr.length;
     let longest=0;
     let longWord="";
     for(let i=0;i<len;i++){
         if(arr[i].length>longest){
         longest=arr[i].length;
         longWord=arr[i];
     }}
     return longWord;
 }

// /**
//  * @param array of any word or sentence
//  * @returns new array with reverse of original array
//  */
function reverseArray(str){
let newStr=[];
    for(let i=str.length-1;i>=0;i--)
    {
        newStr.push(str[i]);
    }
    return newStr;
}

// /**
//  * @param array of any word or sentence
//  * @return same array as reverse
//  */
 function reverseArrayInPlace(arr)
 {
     let leftIndex=0;
     let rightIndex=arr.length-1;
    while(leftIndex<rightIndex)
     {
         let temp=arr[leftIndex]
         arr[leftIndex]=arr[rightIndex]
         arr[rightIndex]=temp
         leftIndex++;
        rightIndex--;
     }
     return arr;

 }

// /**
//  * @param student marks as array and correct as array
//  * @ return new array with student marks
//  */
 function scoreExams(studentAnswers, correctAnswers)
 {
     let score=[];
     for(let i=0;i<studentAnswers.length;i++)
   
    {
        let marks=0;
        for(let j=0;j<studentAnswers[i].length;j++)
       {
           if(studentAnswers[i][j]==correctAnswers[j])
           marks++;
       }
       score.push(marks);
     }
     return score;
 }


