function isPalindrome(x) {
  const strreversed = x.split("").reverse().join("");
  return x.toLowerCase() == strreversed.toLowerCase();
}

console.log(isPalindrome("Abba"));
