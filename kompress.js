module.exports = compress;

function compress(input){
    return input.length ? accumulate(input, 1, input.charAt(0), 1): input;
}

function accumulate(input, index, compress, count){
    return index > input.length - 1 ?  
        /*ended*/
            compress + (count > 1  ? count  : '') + input.charAt(index) :
        /*match*/
        compress.slice(-1) === input.charAt(index) ?
            accumulate(input, index + 1, compress, count + 1):
        /*no match*/
            accumulate(input, index + 1, compress + (count > 1  ? count  : '') + input.charAt(index), 1);
}

