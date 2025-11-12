function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = document.querySelector(".dashboard__item__img");
    let botao = document.querySelector(".dashboard__item__button");
    let nomeJogo = document.querySelector(".dashboard__item__name")

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        botao.textContent = 'Alugar';
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
    }else{
        botao.textContent = 'Devolver';
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
    }
    
}