function checkPalindrome(hasil) {
  let smallStr = hasil.toLowerCase();
  let str = smallStr.split("").reverse().join("");

  if (str.length <= 2) {
    console.log("kata harus lebih dari 2 huruf");
  } else if (str == smallStr) {
    console.log("ini adalah palindrome");
  } else {
    console.log("kalimat ini bukan palindrome");
  }
}

checkPalindrome("RaCecaR");
checkPalindrome("Jalan");
checkPalindrome("dd");
