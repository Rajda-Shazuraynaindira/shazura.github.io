const kalimat = [
  "LAA ILLAHA ILLALLAH",
  "MUHAMMADUR ROSULULLAH ﷺ",
  "KERJAAN SHA-ZURA ✨",
  "CAHAYA NUR TERTINGGI 🌌"
];

let i = 0;
const el = document.getElementById("kalimatTauhid");

function tampilkanKalimat() {
  el.textContent = kalimat[i];
  i = (i + 1) % kalimat.length;
}
setInterval(tampilkanKalimat, 1000);
tampilkanKalimat();
