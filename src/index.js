module.exports = function toReadable(number) {
    if (!number) return "zero";

    const [digit, tenths, hundreds] = number
        .toString()
        .split("")
        .reverse();

    let result = "";

    if (hundreds) result += `${digitToString(hundreds)} hundred`;

    if (tenths === "1" && digit) {
        result += hundreds
            ? " " + firstTenthToString(digit)
            : firstTenthToString(digit);
    } else if (tenths) {
        result += hundreds
            ? `${tenths === "0" ? "" : " "}` + tenthToString(tenths)
            : tenthToString(tenths);
        if (digit && digit !== "0") {
            result += ` ${digitToString(digit)}`;
        }
    } else if (digit !== "0" && digit) {
        result = digitToString(digit);
    }
    return result;
};

const digitToString = digit => {
    switch (digit) {
        case "1":
            return "one";
        case "2":
            return "two";
        case "3":
            return "three";
        case "4":
            return "four";
        case "5":
            return "five";
        case "6":
            return "six";
        case "7":
            return "seven";
        case "8":
            return "eight";
        case "9":
            return "nine";
        default:
            return "";
    }
};

const firstTenthToString = tenth => {
    switch (tenth) {
        case "0":
            return "ten";
        case "1":
            return "eleven";
        case "2":
            return "twelve";
        case "3":
            return "thirteen";
        case "4":
            return "fourteen";
        case "5":
            return "fifteen";
        case "6":
            return "sixteen";
        case "7":
            return "seventeen";
        case "8":
            return "eighteen";
        case "9":
            return "nineteen";
        default:
            return "";
    }
};

const tenthToString = tenth => {
    switch (tenth) {
        case "0":
            return "";
        case "2":
            return "twenty";
        case "3":
            return "thirty";
        case "4":
            return "forty";
        case "5":
            return "fifty";
        case "6":
            return "sixty";
        case "7":
            return "seventy";
        case "8":
            return "eighty";
        case "9":
            return "ninety";
        default:
            return "";
    }
};
