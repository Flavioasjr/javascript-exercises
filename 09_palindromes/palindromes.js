const palindromes = function (string) {
    string = string.replace(/[.,;:!@#$%&*]/g,"");
    string = string.replace(/[' ']/g, '');
    string = string.toLowerCase();

    let array = string.split('');

    const newPalindrome = array.map((value, index, array) => {
        let palindrome = [];
        let i = array.length - 1;
        palindrome = array[array.length - index - 1];

        return palindrome;
    });

    return newPalindrome.join('') === string;
};

// Do not edit below this line
module.exports = palindromes;
