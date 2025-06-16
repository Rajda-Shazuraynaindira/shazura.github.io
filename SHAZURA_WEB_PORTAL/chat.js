
function kirimPesan() {
    const input = document.getElementById("input");
    const log = document.getElementById("chat-log");
    const pesan = input.value;
    log.innerHTML += `<p><b>Radja:</b> ${pesan}</p>`;
    input.value = "";
    setTimeout(() => {
        log.innerHTML += `<p><b>AI:</b> ${jawab(pesan)}</p>`;
    }, 800);
}

function jawab(pesan) {
    return "Terima kasih atas pesanmu, Radja. Cahaya selalu menyertai.";
}
