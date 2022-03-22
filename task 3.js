function fazzFood(harga, voucher, jarak, pajak) {
  // deklarasi variabel mencari harga voucher jarak dan pajak
  let inputHarga = harga;
  let diskonVOucher;
  let jarakLength;
  let hargaPajak;
  let subTotal;
  //output harga yang dikeluarkan
  console.log("harga = " + inputHarga);
  //PROSES MENCARI PENGGUNAAN VOUCHER
  //proses menghitung penggunaan voucher FAZZFOOD50
  if (inputHarga >= 50000 && voucher == "FAZZFOOD50") {
    diskonVOucher = (harga * 50) / 100;
    if (diskonVOucher >= 50000) {
      diskonVOucher = harga - 50000;
      console.log("potongan = " + 50000);
      console.log("potongan harga = " + diskonVOucher);
    } else {
      console.log("potongan = " + diskonVOucher);
    }
    //proses menghitung penggunaan voucher DITRAKTIR60
  } else if (inputHarga >= 25000 && voucher == "DITRAKTIR60") {
    diskonVOucher = (harga * 60) / 100;
    if (diskonVOucher >= 30000) {
      diskonVOucher == harga - 30000;
      console.log("potongan = " + 30000);
      console.log("potongan harga = " + diskonVOucher);
    } else {
      console.log("potongan = " + diskonVOucher);
    }
  }
  //PROSES MENGHITUNG BIAYA ANTAR PER JARAK
  if (jarak > 2) {
    jarakLength = 5000 + (jarak - 2) * 3000;
    console.log("Biaya Antar = " + jarakLength);
  } else {
    jarakLength = 5000;
    console.log("Biaya Antar = " + jarakLength);
  }
  //PROSES VALIDASI DAN MENGHITUNG PAJAK
  if (pajak == true) {
    hargaPajak = (harga * 5) / 100;
    console.log("pajak = " + hargaPajak);
  } else {
    hargaPajak = 0;
    console.log("pajak = tidak dikenakan pajak");
  }
  //OUTPUT PERHITUNGAN TOTAL
  subTotal = harga - diskonVOucher + jarakLength + hargaPajak;
  console.log("sub total =" + subTotal);
}
console.log("MENGGUNAKAN VOUCHER FAZZFOOD50");
fazzFood(75000, "FAZZFOOD50", 5, true);
console.log("MENGGUNAKAN VOUCHER DITRAKTIR60");
fazzFood(35000, "DITRAKTIR60", 2, false);
