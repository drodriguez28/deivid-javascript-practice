let array = [1, 2, 3, 4];


function deivid(array) {
    
    const initialValue = 0;
    
    const sumInitial = array.reduce((x, y) => x + y,
        initialValue);
    
   return sumInitial;
}

console.log(deivid(array));



