let fibonacci = [0,1];


function deividList(nums) {
    for(let i = 1; i < nums; i++){
        fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
    }

    console.log(fibonacci);
    
}

deividList(10)