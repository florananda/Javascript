const BigNumber = require('bignumber.js');


function processData(input) {

    //Enter your code here
    //console.log(factorial(1,input));
    //math.config({precision: 5000});
    var m = new BigNumber(1,10);
    var result = new BigNumber(0);
    result = factorial(m,input);
    var n = result.toString();
    var parts = n.split("e+");
    if(parts[0].indexOf("e+")!=-1)
    {var first = parseFloat(parts[0],10).toFixed(6).replace('.', "");}
    else first =parts[0];
    //console.log(first);
    var zeroes = parseInt(parts[1], 10) - (first.length - 1);
    for(var i = 0; i < zeroes; i++){ first += "0"; }
    console.log(first);
    
    //console.log(result);
} 

function factorial(m,n)
{
    //math.config({precision: 2000});
    if(n==1 || n==0) return m;
    if(n<0) return 0;
    return factorial(m*n,n-1);
}
