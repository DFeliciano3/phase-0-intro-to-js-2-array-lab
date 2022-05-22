// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph){
    cats.push(Ralph);
}

function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
}

function destructivelyRemoveLastCat(Garfield){
    cats.pop(Garfield)
}

function destructivelyRemoveFirstCat(Milo){
    cats.shift(Milo)
}

function appendCat(Broom){
    const catsCopy = [...cats];
    catsCopy.push(Broom)
    return catsCopy
}

function prependCat(Arnold) {
    const catsCopy = [...cats]
    catsCopy.unshift(Arnold)
    return catsCopy
}

function removeLastCat(Garfield){
    const catsCopy = [...cats]
    catsCopy.pop(Garfield)
    return catsCopy
}

function removeFirstCat(Milo){
    const catsCopy = [...cats]
    catsCopy.shift(Milo)
    return catsCopy
}
