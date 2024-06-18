function generateCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 12; i++) {
        if (i > 0 && i % 4 === 0) {
            code += '-';
        }
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex];
    }
    document.getElementById('code').innerText = code;
}