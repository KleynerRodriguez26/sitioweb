document.querySelectorAll('.btn-leer-mas').forEach(button => {
    button.addEventListener('click', () => {
        const title = button.getAttribute('data-title');
        const text = button.getAttribute('data-text');
        const img = button.getAttribute('data-img');

        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-text').innerText = text;
        document.getElementById('modal-img').src = img;

        document.getElementById('modal').style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', event => {
    if (event.target.id === 'modal') {
        document.getElementById('modal').style.display = 'none';
    }
});
