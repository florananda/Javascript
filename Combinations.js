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
    
    return result;
}
