// Função para cadastrar o jogador
document.getElementById('btn-cadastrar').addEventListener('click', function() {
    // Obter dados dos inputs
    var nomeCompleto = document.getElementById('nome-completo').value;
    var apelido = document.getElementById('apelido').value;
    var numeroCamisa = document.getElementById('numero-camisa').value;
    var dataNascimento = document.getElementById('data-nascimento').value;
    var rg = document.getElementById('rg').value;
    var posicao = document.getElementById('posicao').value;

    if (nomeCompleto && apelido && numeroCamisa && dataNascimento && rg && posicao) {
        // Criar a nova lista de jogador
        var jogadorItem = document.createElement('li');
        jogadorItem.innerHTML = apelido + ' - Camisa ' + numeroCamisa;

        // Armazenar as informações completas no dataset
        jogadorItem.dataset.nomeCompleto = nomeCompleto;
        jogadorItem.dataset.numeroCamisa = numeroCamisa;
        jogadorItem.dataset.dataNascimento = dataNascimento;
        jogadorItem.dataset.rg = rg;

        // Criar o botão de exclusão
        var btnExcluir = document.createElement('button');
        btnExcluir.classList.add('btn-excluir');
        btnExcluir.innerText = 'Excluir';
        jogadorItem.appendChild(btnExcluir);

        // Adicionar o jogador à lista
        document.getElementById('lista-jogadores').appendChild(jogadorItem);

        // Limpar os campos após o cadastro
        document.getElementById('nome-completo').value = '';
        document.getElementById('apelido').value = '';
        document.getElementById('numero-camisa').value = '';
        document.getElementById('data-nascimento').value = '';
        document.getElementById('rg').value = '';
        document.getElementById('posicao').value = '';

        // Adicionar funcionalidade ao botão de exclusão
        btnExcluir.addEventListener('click', function() {
            jogadorItem.remove();
        });
    }
});
// Gerar relatório completo em PDF com formato de tabela
document.getElementById('gerar-relatorio').addEventListener('click', function() {
    // Garantir que a biblioteca jsPDF esteja carregada corretamente
    const { jsPDF } = window.jspdf;
    var doc = new jsPDF();

    // Adicionar título
    doc.setFontSize(14);
    doc.text('Relatório Completo de Jogadores Cadastrados', 10, 10);
    
    // Formatar a data no formato brasileiro (dd/mm/yyyy)
    var dataAtual = new Date();
    var dia = String(dataAtual.getDate()).padStart(2, '0');
    var mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Mes começa de 0
    var ano = dataAtual.getFullYear();
    var dataFormatada = dia + '/' + mes + '/' + ano;
    doc.text('Data: ' + dataFormatada, 150, 10);  // Colocando a data no canto direito

    // Adicionar uma linha de separação
    doc.line(10, 15, 200, 15);

    // Cabeçalho da tabela
    doc.setFontSize(12);
    doc.text('Nome Completo', 10, 25);
    doc.text('Número', 90, 25);
    doc.text('Data de Nascimento', 120, 25);
    doc.text('RG', 180, 25);

    // Desenhar a linha de separação do cabeçalho
    doc.line(10, 30, 200, 30); 

    // Adicionar as informações dos jogadores
    var yPos = 35;  // Posição Y onde a lista de jogadores vai começar
    var jogadores = document.querySelectorAll('#lista-jogadores li');
    
    jogadores.forEach(function(jogador) {
        var nomeCompleto = jogador.dataset.nomeCompleto || 'N/A';
        var numeroCamisa = jogador.dataset.numeroCamisa || 'N/A';
        var dataNascimento = jogador.dataset.dataNascimento || 'N/A';
        var rg = jogador.dataset.rg || 'N/A';
        
        // Ajuste na largura das colunas para não exceder o limite da página
        var nomePos = 10;
        var numeroPos = 90;
        var dataPos = 120;
        var rgPos = 150; // Ajustado para evitar ultrapassar o final da página

        // Inserir os dados do jogador na tabela
        doc.text(nomeCompleto, nomePos, yPos);
        doc.text(numeroCamisa, numeroPos, yPos);
        doc.text(dataNascimento, dataPos, yPos);
        doc.text(rg, rgPos, yPos);

        // Desenhar linha de separação após cada linha de dados
        doc.line(10, yPos + 2, 200, yPos + 2);
        
        // Atualizar a posição Y para o próximo jogador
        yPos += 8; 
    });

    // Gerar o PDF com o conteúdo do relatório
    doc.save('relatorio-jogadores.pdf');
});
