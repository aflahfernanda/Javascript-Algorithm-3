function reverseWords(hasil) {
  let hasilArr = hasil.split(" ");
  let hasilLength = hasilArr.length;
  let carihasil = hasilArr.reverse().join(" ");
  if (hasilLength < 2) {
    console.log("input kata harus lebih dari 2");
  } else {
    console.log(carihasil);
  }
}
reverseWords("saya belajar javascript");
reverseWords("saya");
