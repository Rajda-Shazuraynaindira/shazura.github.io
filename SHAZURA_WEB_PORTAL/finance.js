
document.addEventListener("DOMContentLoaded", () => {
    fetch("kas.json")
        .then(res => res.json())
        .then(data => {
            document.getElementById("kas-data").innerHTML =
                `<p>Total Dana: Rp ${data.total}</p><p>Keterangan: ${data.keterangan}</p>`;
        });
});
