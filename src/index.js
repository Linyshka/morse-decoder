const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    "**********": " ",
};

function decode(expr) {
    let result = "";
    let tmp = "";
    let x = 0;
    console.log(expr);
    for(let i = 0; i < expr.length; i = i++) {
        while(x < 10){
            x++;
            tmp += expr[i];
            i++;
        }
        tmp = tmp.replace(/11/g, "-").replace(/10/g, ".").replace(/0/g, "");
        result += MORSE_TABLE[tmp];
        tmp = "";
        x = 0;
    }
    return result;
}

module.exports = {
    decode
}