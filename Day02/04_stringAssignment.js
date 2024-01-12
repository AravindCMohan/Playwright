/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
 
Example 1:
 
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 

Write a function to check if two strings are anagrams.

 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
 
*/
/*
If the given string and reverse string is same --> palindrome

Objective: If the given string is palindrome

hints:

1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/

function lengthOfLastWordInTheString(str) {
    let strArray = str.split(" ");
    return (strArray[strArray.length -1]).length;
}

let str1 = 'Hi, hello, how are you? Hope you are doing good';
let str2 = "   fly me   to   the moon  ";
let str3 = "Hello World";
console.log('***************************************************************************************************');
console.log(`The length of the last word in the string - ${str1} is `+lengthOfLastWordInTheString(str1.trim()));
console.log(`The length of the last word in the string - ${str2} is `+lengthOfLastWordInTheString(str2.trim()));
console.log(`The length of the last word in the string - ${str3} is `+lengthOfLastWordInTheString(str3.trim()));
console.log('***************************************************************************************************');



function isAnagram(anagramStr1,anagramStr2) {
    //console.log(anagramStr1);
    //console.log(anagramStr2);
    if((anagramStr1.length)!= (anagramStr2.length)){
        //console.log('Lengths mismatch');
        return false;
    }
    let map = new Map();
    for (let i = 0; i < anagramStr1.length; i++) {
        if(map.has(anagramStr1[i])){
            map.set(anagramStr1[i],map.get(anagramStr1[i])+1);
        }else{
            map.set(anagramStr1[i],1);
        }
    }
    for (let i = 0; i < anagramStr2.length; i++) {
        if(map.has(anagramStr2[i])){
            map.set(anagramStr2[i],map.get(anagramStr2[i])-1);
        }
    }
    for (let [key,value] of map) {
        //console.log(key + ': ' + value);
        if(value != 0){
            //console.log('not anagram');
            return false
        }
    }
    return true
 }
 let anagramStr1 = 'listen';
 let anagramStr2 = 'silent';
 console.log(`Is ${anagramStr1} and ${anagramStr2} Anagram: `+isAnagram(anagramStr1,anagramStr2));
 let anagramStr3 = 'hello';
 let anagramStr4 = 'world';
 console.log(`Is ${anagramStr3} and ${anagramStr4} Anagram: `+isAnagram(anagramStr3,anagramStr4));
 console.log('***************************************************************************************************');

 
 
 function isPalindrome(palindromeStr) {
    let reverseStr = '';
    for (let i = palindromeStr.length-1; i >= 0 ; i--) {
        reverseStr += palindromeStr[i];
    }
    if(reverseStr == palindromeStr){
        return true;
    }  else{
        return false;
    }
 }
 let palindromeStr1 = 'malayalam';
 console.log(`Is ${palindromeStr1} Palindrome: `+isPalindrome(palindromeStr1));
 let palindromeStr2 = 'Hello';
 console.log(`Is ${palindromeStr1} Palindrome: `+isPalindrome(palindromeStr2));
 console.log('***************************************************************************************************');