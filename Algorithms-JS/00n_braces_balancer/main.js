function checkBraces(braces) {
    if (braces.length % 2 !== 0) return "NO";

    let i = 0;
    let j = Math.floor(braces.length / 2);
    const left = {};
    const rigth = {};
    const chars = ["(", "[", "{"];

    while (j > i) {
        const currChar = braces[i];
        if (left[currChar]) {
            left[currChar] = left[currChar] + 1;
        } else {
            left[currChar] = 1;
        }
        i++;
    }

    while (braces.length > j) {
        const currChar = braces[j];
        if (rigth[currChar]) {
            rigth[currChar] = rigth[currChar] + 1;
        } else {
            rigth[currChar] = 1;
        }
        j++;
    }

    for (let k = 0; k < chars.length; k++) {
        const currChar = chars[k];
        switch (currChar) {
            case "(":
                if (left[currChar] !== rigth[")"]) return "NO";
                if (left[")"] !== rigth[currChar]) return "NO";
                break;
            case "[":
                if (left[currChar] !== rigth["]"]) return "NO";
                if (left["]"] !== rigth[currChar]) return "NO";
                break;
            case "{":
                if (left[currChar] !== rigth["}"]) return "NO";
                if (left["}"] !== rigth[currChar]) return "NO";
                break;
            default:
                return "NO";
                break;
        }
    }

    return "YES";
}

checkBraces("{[(])}");
