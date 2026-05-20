function InicioPagina() {
  return (
    <section className="page-home" aria-labelledby="home-titulo">
      <div className="app-about__card">
        <img src='src/assets/pokeranger.png' alt='Pokémon Ranger' className='logo'/>
        <h2 id="inicio">Bem-vindo à Pokédex do Gusta!</h2>
      </div>
      <div>
        <p>
          Explore o catálogo de Pokémon deste treinador, use a busca por nome e clique em um card
          para ver os detalhes. Use o menu acima para navegar entre Início,
          Pokémon e Sobre.
        </p>
      </div>
    </section>
  )
}

export default InicioPagina