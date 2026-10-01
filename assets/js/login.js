const buttons = document.querySelectorAll('.login-btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const provider = button.dataset.provider;
        const label = button.querySelector('.btn-label');
        const original = label.textContent;

        buttons.forEach((b) => (b.disabled = true));
        label.textContent = 'Conectando...';

        setTimeout(() => {
            window.location.href = `/auth/${provider}/`;
            buttons.forEach((b) => (b.disabled = false));
            label.textContent = original;
        }, 600);
    });
});

const bitrate = document.getElementById('bitrate');
const formatKbps = (value) => value.toLocaleString('pt-BR');

setInterval(() => {
    const value = 6000 + Math.round(Math.random() * 400);
    bitrate.textContent = formatKbps(value);
}, 2000);

document.getElementById('year').textContent = new Date().getFullYear();