function divideAndSort(arrLength) {
  let result = [];
  let indeksArr;
  let indeks;
  let indeksSplit;
  if (typeof arrLength != "number") {
    console.log("data array harus menggunakan angka");
  } else {
    indeksArr = arrLength.toString().split("0");
    for (let i = 0; i < indeksArr.length; i++) {
      indeks = indeksArr[i];
      indeksSplit = indeks
        .split("")
        .sort(function (i, e) {
          return i - e;
        })
        .join("");
      result += indeksSplit;
    }
    console.log(result);
  }
}
divideAndSort(5956560159466056);
divideAndSort("5956560159466056");
