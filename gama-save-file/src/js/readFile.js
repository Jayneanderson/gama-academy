async function loadFile(file) {
    let text = await file.text();
    document.getElementById('output').textContent = text;
}