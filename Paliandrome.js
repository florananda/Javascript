
function get_combination(isubstring) {
    //console.log("Inside Get Combinations,substring is:"+isubstring);
    let string_array = [], y, x,prev=[],prevl;
    for (y = isubstring.length;y>= 1; y--) { 
            prev = combinations(isubstring,y);
            prevl=prev.length;
            for (x=0;x<prevl;x++ )
               { //console.log("x is:"+prev[x]);
                   if (prev[x] == prev[x].split("").reverse().join("")) {
                    string_array.push(prev[x]);
                    break;
                }
        }
    }
    //console.log("string_array:"+string_array)
    return string_array;
}

var combinations = function (string,length) {
    var result = [];

    var loop = function (start, depth, prefix) {
        for (var i = start; i < string.length; i++) {
            var next = prefix + string[i];
            if (depth > 0)
                loop(i + 1, depth - 1, next);
            else
                result.push(next);
        }
    }
    loop(0, length-1, '');
    
    return result.reverse();
}

function getResult(istring) {
    let palindrome_len = [], i,str1l,str2l;
    for (i = 0; i < istring.length; i++) {
        let str1_array = [];
        let str2_array = [];
        let string1 = istring.slice(0, i);
        let string2 = istring.slice(i);
        str1_array = get_combination(string1)
        str2_array = get_combination(string2)
        if (str1_array.length != 0 )  str1l=str1_array[0].length; else str1l=1;
        if(str2_array.length!=0) str2l=str2_array[0].length; else str2l=1;
        
            //palindrome_len.push(1)
            palindrome_len.push(str1l * str2l);
        
    }
    //console.log("Paliandrimic length:"+palindrome_len);
    return Math.max.apply(null, palindrome_len);
}

module.exports.main=function()
{
s = 'attack';
res = getResult(s);
console.log(res);
}
require('make-runnable');