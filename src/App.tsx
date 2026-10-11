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

      
<section id="travel" className="essentials">
  <h2>Matchday essentials</h2>

  <div className="essential-grid">
    <article className="essential-card">
      <span className="card-icon" aria-hidden="true">↗</span>
      <h3>Travel</h3>
      <p>
        Plan your journey and find useful travel information
        before you leave home.
      </p>
      <a href="#updates">
        Explore travel <span aria-hidden="true">→</span>
      </a>
    </article>

    <article id="stadium" className="essential-card">
      <span className="card-icon" aria-hidden="true">⌖</span>
      <h3>Stadium guide</h3>
      <p>
        Find entrances, facilities and accessibility
        information for your visit.
      </p>
      <a href="#updates">
        Explore stadium <span aria-hidden="true">→</span>
      </a>
    </article>
  </div>
</section>

    <section id="updates" className="updates">
      <h2>Latest Updates</h2>
      <p className="last-checked">
        Example updates - not live data</p>
        
        <div className="updates-list">
          <article className="update-item">
            <div className="update-heading">
              <span className="update-category">Travel</span>
              <span className="update-time">Example Time</span>
            </div>
            <h3>Plan your Journey</h3>
            <p>Check your travel options before leaving for the stadium.</p>
          </article>

          <article className="update-item">
            <div className="update-heading">
              <span className="update-category">Stadium</span>
              <span className="update-time">Example Time</span>
            </div>
            <h3>Prepare for your visit</h3>
            <p>Find entrances, facilities and accessibility information for your visit.</p>
          </article>
          <article className="update-item">
            <div className="update-heading">
              <span className="update-category">Matchday</span>
              <span className="update-time">Example Time</span>
            </div>
            <h3>CheckMatchday information</h3>
            <p>Get the latest matchday information and updates.</p>
          </article>
        </div>
    </section>
      </main>
    </div>
  )
}

export default App;
