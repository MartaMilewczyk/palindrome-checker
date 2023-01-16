// Replace non-alphanumeric characters using RegEx
function replacedNonAlpha(string) {
    return string.replace(/[\W_]/g, "")
}

// Make all characters upper cased
function toUpperCase(string) {
    return string.toUpperCase()
}

// Reverse string
function reversingString(string) {
    let output = "";
    // Start a loop at the end of the input string
    for (let i = string.length - 1; i >= 0; i--) {
        output += string[i];
    }
    // Return output string
    return output;
}

function makePalindrome(string) {
    // Call function replacing non-alphanumeric characters and assign to variable
    let cleanString = replacedNonAlpha(string);

    // Call function making characters upper cased and assign to variable
    const upperCasedString = toUpperCase(cleanString)

    // Reverse the string
    const reverseString = reversingString(upperCasedString)

    // Compare given and reversed string - if are the same - it's a palindrome
    if(reverseString === upperCasedString) {
        console.log(`${upperCasedString} is a palindrome!`);
    } else {
        console.log(`${upperCasedString} is NOT a palindrome`);
    }
}

makePalindrome("eye");