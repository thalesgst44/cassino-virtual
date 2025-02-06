document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        
        form.reset();
    });
});

function jogarTigrinho() {
    const resultado = Math.random() < 0.5 ? 'Você ganhou!' : 'Você perdeu!';
    document.getElementById('resultado-tigrinho').textContent = resultado;
}

function jogarRoletaBacBoo() {
    const numero = Math.floor(Math.random() * 37);
    const resultado = `A roleta parou no número ${numero}.`;
    document.getElementById('resultado-roleta-bac-boo').textContent = resultado;
}