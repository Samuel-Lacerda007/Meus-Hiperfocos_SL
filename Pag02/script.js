document.addEventListener("DOMContentLoaded", () => { 
  //Essa parte de cima aqui é responsável por fazer essa parte do JavaScrit rodar por ultimo no site, ele carregar o Html e CSS, depois disso o Java Script, isso aqui garante isso
  
  const elementos = document.querySelectorAll('.escondido');
  //Esse elemento é constante e ele é responsavél por selecionar todos da classe escondido e amarzenar em elementos

  const observer = new IntersectionObserver((entries, observer) => {
    //Essa parte é vigia do site, serve para saber se pessoa está olhando ou não para algo, ele também é algo constante e ele amazenar em observer e também passar o daods do observer e de entries que ele viu passa para o entries.forEach(entry => {. new IntersectionObserver( O_QUE_FAZER , AS_REGRAS ); Essa parte é a criação do obsevador e do que ele tem que fazer que é guardar os elementos entries, observer e se for visto algum escondido ele tem que fazer o if
    entries.forEach(entry => {
      // Entries seria como uma porta e essa porta possui um sensor aí o forEach serve para a porta saber que precisa contar um por um a pessoa que passa e suas informações e entry pega essa informações e passa para o que está dentro do => { }.
      if (entry.isIntersecting) {
        //Se for visto acontece o que está entre os { }
        entry.target.classList.add('visivel');
        // Essa parte adicionar os atributos da classe visivel para as classes selecionadas pelo querySelectorAll e amarzenada no elementos
        observer.unobserve(entry.target)
        //  E aqui faz o observador para de olhar para os itens que ficou visivel
      }
      });

  }, {
    threshold: 0.74
    //Aqui seria o final do que ele tem que fazer e começo das regras do observador que se aparecer 44% da classe escondido ele vai fazer aparecer a imagem.
  });
  //Final do observador

  elementos.forEach(elemento => {
    observer.observe(elemento);
    // faz o obeservador fica de olho no os elemento que possui o elementos e aí se aparecer acontece aquilo e ele executar e usa a regra do 44 %
  });
});