// Exemplo simples de redirecionamento para as telas correspondentes
document.getElementById('cadastro-jogadores').addEventListener('click', function() {
    window.location.href = 'cadastro-jogadores.html';
 // Direciona para a tela de cadastro de jogadores
});

document.getElementById('cadastro-partidas').addEventListener('click', function() {
    window.location.href = 'cadastro-partidas.html'; // Direciona para a tela de cadastro de partidas
});

document.getElementById('agenda-jogos').addEventListener('click', function() {
    window.location.href = 'agenda-jogos.html'; // Direciona para a agenda de jogos
});

document.getElementById('estatisticas-time').addEventListener('click', function() {
    window.location.href = 'estatisticas-time.html'; // Direciona para as estatísticas do time
});

document.getElementById('estatisticas-jogadores').addEventListener('click', function() {
    window.location.href = 'estatisticas-jogadores.html'; // Direciona para as estatísticas dos jogadores
});
