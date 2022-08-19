/** calback **/

function suma(a, b) {
    return a + b;
}

function call(a, b, callback) {
    return callback(a, b);
}


console.log("this is callback "+call(2, 3, suma));



/** setTimeOut **/

setTimeout( ()=>{
    console.log('this is settimeuot');
}, 2000);


function gretting(name) {
    console.log(`Hello ${name}`);
}

setTimeout(gretting, 3000, 'John');