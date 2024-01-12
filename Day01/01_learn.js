/* 
1) Javascript File Name: 01_learn.js
 
    Objective: Learn Primitive Data Types
 
    Create the following variables using var and check their typeOf
 
    a) firstName
    b) companyName
    c) mobileNumber
    d) isAutomation
    e) hasPlaywright (do not assign)
 
    print and confirm the values and data types

 */


var firstName = 'Aravind';
console.log('type of firstName is '+ typeof firstName + '; value of firstName is '+ firstName);

var companyName = 'Prometric';
console.log('type of companyName is '+ typeof companyName + '; value of companyName is '+ companyName);

var mobileNumber = 899999999;
console.log('type of mobileNumber is '+ typeof mobileNumber + '; value of mobileNumber is '+ mobileNumber);

var isAutomation = true;
console.log('type of isAutomation is '+ typeof isAutomation + '; value of isAutomation is '+ isAutomation);

var hasPlaywright;
console.log('type of hasPlaywright is '+ typeof hasPlaywright + '; value of hasPlaywright is '+ hasPlaywright);


  /* 
    Use same Javascript File Name: 01_learn.js
 
    Objective: Learn var vs let vs const and understand variable scoping
 
    Declare a const name as browserName (global)
    Assign value as "Chrome"
    Create a function by name getBrowserVersion
    Create if condition inside function to check if browser is chrome, then
    Declare a local variable -- use var first (browserVersion) and print that variable inside function (outside block)
    Call that function from the javascript
 
    - Use 'var' first as block variable and then convert that as 'let'
    - Confirm how it works
 
    - function how to write and how to call
    - basic if condition and block variable
    - let vs var
    */


const browserName = 'chrome';
function getBrowserVersion(browserName) {
    if (browserName == 'chrome') {
        var browserVersion_var = 'v119';
        let browserVersion_let = 'v120';
    }
    try {
        console.log(browserVersion_var + ' local block variable declared and assigned using var can be accessed outside its block ');
        console.log(browserVersion_let);
    } catch (error) {
        console.log('Error Handling: local block variable declared and assigned using let cannot be accessed outside its block ')
    }
    
}

getBrowserVersion(browserName);