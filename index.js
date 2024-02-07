function fibonacciGenerator (n) {

    var output = [];
    if (n == 1){
        output.push(0);
    }
    else if(n == 2){
        output.push(0);
        output.push(1);
    }
    else {
        output.push(0);
        output.push(1);
        while(n > output.length){
            output.push(output[output.length-2] + output[output.length-1]);
          
        }

    }
    console.log(output)

}


fibonacciGenerator(10);