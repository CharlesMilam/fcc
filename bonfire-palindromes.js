function palindrome(str) {
    str = str.toLowerCase().replace(/\.|,/g, " ").split(" ").join("");

    var ary = str.split("").reverse().join("");

    if (ary === str) {
      return true;
    }
    return false;
}



palindrome("eye");
palindrome("race car");
palindrome("A man, a plan, a canal. Panama");
palindrome("nope");
palindrome("not a palindrome");
