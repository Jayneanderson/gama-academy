function save() {
    let text = document.getElementById('text').value;
    let title = document.getElementById('title').value;

    //todo texto antes de ser armazenado terá caracteres especiais tratados
    let blob = new Blob([text], { type: 'text/plain;charset=utf-8' });

    saveAs(blob, title + '.txt');
}