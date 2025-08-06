document.addEventListener('DOMContentLoaded', function() {

    const botoesAbas = document.querySelectorAll('.botaoAba[data-relatorio]');
    const conteudosAbas = document.querySelectorAll('.trocaDeAbas');

    botoesAbas.forEach(botao => {
        botao.addEventListener('click', function() {
            const abasId = this.getAttribute('data-relatorio');
            
            botoesAbas.forEach(b => b.classList.remove('ativo'));
            conteudosAbas.forEach(c => c.classList.remove('ativo'));
            
            this.classList.add('ativo');
            document.getElementById(abasId).classList.add('ativo');
        });
    });

    if (!document.querySelector('.botaoAba.ativo')) {
        botoesAbas[0].classList.add('ativo');
        conteudosAbas[0].classList.add('ativo');
    }
});

document.addEventListener('DOMContentLoaded', function() {

    const botoesAbas = document.querySelectorAll('.botaoDados[data-relatorio]');
    const conteudosRelatorios = document.querySelectorAll('.conteudoImportar');

    botoesAbas.forEach(botao => {
        botao.addEventListener('click', function() {
            const relatorioId = this.getAttribute('data-relatorio');
            
            botoesAbas.forEach(b => b.classList.remove('ativo'));
            conteudosRelatorios.forEach(c => c.classList.remove('ativo'));
            
            this.classList.add('ativo');
            document.getElementById(relatorioId).classList.add('ativo');
        });
    });

    if (!document.querySelector('.botaoDados.ativo')) {
        botoesAbas[0].classList.add('ativo');
        conteudosRelatorios[0].classList.add('ativo');
    }
});