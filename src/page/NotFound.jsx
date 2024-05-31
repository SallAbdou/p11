const NotFound = () => {
  return (
    <main>
      <header className="home">
        <img src="./logo.png" alt="Logo"/>
        <ul className="header-link">
          <li>Accueil</li>
          <li>À propos</li>
        </ul>
      </header>

      <section className="error-section">
        <h1 className="error-number">404</h1>
        <p className="error-text">{"Oups! La page que vous demandez n'existe pas."}</p>
        <a href="/" className="return-link">{"retourner sur la page d'accueil"}</a>

      </section>
    </main>
  )
}

export default NotFound
