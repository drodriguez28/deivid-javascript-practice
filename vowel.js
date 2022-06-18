function isCharAVowel(x) {
    toUpperCase = (x)
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') {
        return true;
    }
    if (x == 'A' || x == 'E' || x == 'I' || x == 'O' || x == 'U') {
        return true;
    } else {
        return false;
    }
}


console.log(`Extersise 3 results: 
E: ${isCharAVowel("E")}
m: ${isCharAVowel("m")}
o: ${isCharAVowel("o")}
t: ${isCharAVowel("t")}
i: ${isCharAVowel("i")}
v: ${isCharAVowel("v")}
e: ${isCharAVowel("e")}
T: ${isCharAVowel("T")}
u: ${isCharAVowel("u")}
n: ${isCharAVowel("n")}
a: ${isCharAVowel("a")}

`);