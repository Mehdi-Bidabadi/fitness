function split(n) {
    return n.toString().match(/.{2,3}(?=..)|.+/g);
}

function ToRial(str) {
 
str = str.replace(/\,/g, '');
    const objRegex = new RegExp('(-?[0-9]+)([0-9]{3})');
 
    while (objRegex.test(str)) {
        str = str.replace(objRegex, '$1,$2');
    }
 
    return str;
}

export { split, ToRial }