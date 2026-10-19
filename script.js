function hitungPesanan(event) {
  event.preventDefault();

  let harga1 = 20000; // Nasi Goreng
  let harga2 = 15000; // Mie Goreng
  let harga3 = 18000; // Ayam Geprek
  let harga4 = 10000; // Es Teh
  let harga5 = 10000; // Air Mineral

  let jumlah1 = parseInt(document.getElementById("menu1").value) || 0;
  let jumlah2 = parseInt(document.getElementById("menu2").value) || 0;
  let jumlah3 = parseInt(document.getElementById("menu3").value) || 0;
  let jumlah4 = parseInt(document.getElementById("menu4").value) || 0;
  let jumlah5 = parseInt(document.getElementById("menu5").value) || 0;

  let total1 = harga1 * jumlah1;
  let total2 = harga2 * jumlah2;
  let total3 = harga3 * jumlah3;
  let total4 = harga4 * jumlah4;
  let total5 = harga5 * jumlah5;

  let totalHarga = total1 + total2 + total3 + total4 + total5;

  let uangBayar =
    parseInt(document.getElementById("uangBayar").value) || 0;

  if (totalHarga === 0) {
    alert("Silakan pilih menu terlebih dahulu!");
    return;
  }

  if (uangBayar < totalHarga) {
    alert(
      "Uang pembayaran kurang!\n" +
      "Total: Rp" +
      totalHarga.toLocaleString("id-ID") +
      "\n" +
      "Uang bayar: Rp" +
      uangBayar.toLocaleString("id-ID")
    );
    return;
  }

  let kembalian = uangBayar - totalHarga;

  alert(
    "=== STRUK KANTIN DIGITAL ===\n\n" +
    "Total Harga : Rp" +
    totalHarga.toLocaleString("id-ID") +
    "\n" +
    "Uang Bayar  : Rp" +
    uangBayar.toLocaleString("id-ID") +
    "\n" +
    "Kembalian   : Rp" +
    kembalian.toLocaleString("id-ID") +
    "\n\n" +
    "Terima kasih sudah membeli!"
  );
}