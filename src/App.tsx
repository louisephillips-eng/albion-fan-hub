import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <a className="brand" href="#" aria-label="Albion Fan Hub Home">
          <span className="brand-icon">~</span>
          <span>
            <strong>ALBION FAN HUB</strong>
            <small>YOUR MATCHDAY, MADE SIMPLE</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#matchday">Matchday</a>
          <a href="#travel">Travel &amp; Stadium</a>
        </nav>
      </header>

      <main id="home" className="dashboard">
        <p className="eyebrow">YOUR MATCHDAY DASHBOARD</p>
        <h1>Everything you need, in one place.</h1>
        <p className="intro">Find match information and plan your visit without the hassle.</p>

      <section
        id="matchday"
        className="match-card"
        aria-labelledby="match-title"
      >

      <div className="match-card-top">
        <span className="section-label">NEXT MATCH</span>
        <span className="home-badge">HOME MATCH</span>
      </div>

      <p className="example-note">
        Example fixture - not live match data</p>

      <h2 id="match-title">Brighton vs West Ham</h2>
      <p className="match-date">Saturday 20th May, 15:00</p>

      <div className="stadium">
        <span aria-hidden="true"></span>
        <span>American Express Stadium</span>
      </div>    
        
      </section>

      </main>
    </div>
  )
}

export default App;
