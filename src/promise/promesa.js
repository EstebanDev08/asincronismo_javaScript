const promise = new Promise((resolve, reject) => {

        resolve('Hello World');

});

const cows = 1;

const promise2 = new Promise((resolve, reject) => {

       if (cows > 10) {
           resolve('More than 10 cows');
       }else {
           reject('Less than 10 cows');
       }

});

/** llamamos la promesa con then para cuando es verdadero */
promise2.then((message) => {
    console.log(message);

    /** catch para cuando sea rechazada*/
}).catch((message) => {
    console.log(message);

    /** se ejecuta el codigo que queremos cuando finalice la ejecucion*/
}).finally(() => {
    console.log('Finally');
});