/* let number = 100;
console.log(number);

const PI = 3.14;
console.log (PI); */

/*PI = 3.1416;
console.log (PI);  ERRORE */

/* let radius = 8;
let circle = radius * 2 * PI;
console.log(circle);

let name = 'Carlo';
name = 'Marco';
console.log(name);


let greet = 'Ciao, mondo!';
console.log(greet); */

//let greet = 'Come stai, Mondo?';
//console.log(greet);

/* greet = `${greet} Come stai?`;
console.log(greet);

greet = greet + " " + 'Come stai?';
console.log(greet); */


//ese1
/* let num1 = 40;
let num2 = 34;
let comparison;
if (num1 > num2) {
    comparison = num1;
}
console.log(comparison);
 */
//ese 2
/* let string1 = 'pippo';
let string2 = 'peppa';
let comparison;
if (string1 == string2) {
    comparison = diverse;
}
console.log(comparison); */




//ese 3
/* let num = 2;
let comparison;
if (num === '2'){
    comparison = true;
}
else {
    comparison = false;
}
console.log(comparison);
 */

//ese 1a
/* for(let i=1; i<=42; i++){
    console.log(i);
} */

//ese1b
/* for(let i=42; i>=1; i--){
    console.log(i);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);

const fruits = ['mela','banana','pesca','pera','albicocca','mango','kiwi','papaya'];
console.log(fruits);

console.log(fruits.length); */

//SNACK 1
//parseInt trasforma una stringa in numero
/* let num_1 = parseInt(prompt('primo numero'));
let num_2 = parseInt(prompt('secondo numero'));

if(num_1 > num_2){
    console.log(num_1);
}
else if(num_1 < num_2){
    console.log(num_2);
}
else{
    console.log('sono uguali');
} */


//SNACK 2 
/* let somma = 0;
for(let i=0; i<10; i++){
    let number = parseInt(prompt('inserisci numero'));
    somma += number;
}
console.log(somma); */

//SNACK 3 [scrivere solo 'flag' è uguale a 'flag == true']
/* const list = ['luca','manuel','filippo','michele','antonio'];
let user = prompt('inserisci nome');
let flag = false;
for(let i=0; i<list.length; i++){
    if(user == list[i]){
        flag = true;
    }
}
if(flag){
    console.log('puoi partecipare alla festa');
}
else{
    console.log('non puoi partecipare alla festa');
} */

//SANCK 3
/* const empty = [];
for(let i=0; i<6; i++){
    let num = parseInt(prompt('inserisci numero'));
    if(num%2 != 0){
        empty.push(num);
    }
}
console.log(empty); */


/* let volte = prompt('quanti visualizzare');
let a1 = 0, b1 = 1;
let c1;
console.log(b1); */
/* for(let i=0; i<volte; i++){
    c1 = a1 + b1; 
    a1 = b1;
    b1 = c1;
    console.log(c1);
} */


/* let h=0;
while(h<volte){
    c1 = a1 + b1; 
    a1 = b1;
    b1 = c1;
    h++
    console.log(c1);
} */

//esercizio 1/a
function print(){
    alert('Ciao Mondo');
}

//esercizio 1/b
print();

//ese 2/a
function sum(num1,num2){
    return (num1 + num2);
}

//ese 2/b
let sum = sum(10,17);
console.log(sum(a,b));