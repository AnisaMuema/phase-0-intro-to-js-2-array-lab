// Write your solution here!
let cats = 
    ["Milo","Otis","Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}
 function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
 }

 function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;   
 }

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    let name_1 = [...cats, name];
    return name_1;
}

function prependCat(name) {
    let name_2 = [name, ...cats];
    return name_2;
}

function removeLastCat() {
    let name_3 = cats.slice(0,cats.length-1);
    return name_3;
}

function removeFirstCat() {
    let name_4 = cats.slice(1)
    return name_4
}


