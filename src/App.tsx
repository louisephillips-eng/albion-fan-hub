import { useEffect, useState } from "react";
import "./App.css";

type Category = "All" | "Travel" | "Stadium" | "Matchday";

const FILTERS: Category[] = ["All", "Travel", "Stadium", "Matchday"];

// Example fixture - replace with real data when an API is available
const NEXT_MATCH = {
  home: "Brighton",
  away: "West Ham",
  kickoff: new Date("2026-10-24T15:00:00+01:00"),
  venue: "American Express Stadium",
};

const ESSENTIALS = [
  {
    icon: "🚆",
    title: "Travel",
    text: "Plan your journey by train, bus or car before you leave home.",
    category: "Travel" as Category,
  },
  {
    icon: "🏟️",
    title: "Stadium guide",
    text: "Find entrances, facilities and what to expect on arrival.",
    category: "Stadium" as Category,
  },
  {
    icon: "♿",
    title: "Accessibility",
    text: "Step-free routes, accessible seating and support for your visit.",
    category: "Stadium" as Category,
  },
];

const UPDATES = [
  {
    category: "Travel" as Category,
    time: "Example time",
    title: "Plan your journey",
    text: "Check your travel options before leaving for the stadium.",
  },
  {
    category: "Stadium" as Category,
    time: "Example time",
    title: "Prepare for your visit",
    text: "Find entrances, facilities and accessibility information.",
  },
  {
    category: "Matchday" as Category,
    time: "Example time",
    title: "Check matchday information",
    text: "Get the latest matchday information and updates.",
  },
];

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  const minutes = Math.floor(diff / 60000);
  return {
    days: Math.floor(minutes / 1440),
    hours: Math.floor((minutes % 1440) / 60),
    minutes: minutes % 60,
  };
}

function App() {
  const [filter, setFilter] = useState<Category>("All");
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(NEXT_MATCH.kickoff));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(NEXT_MATCH.kickoff)), 30000);
    return () => clearInterval(id);
  }, []);

  const dateText = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/London",
  }).format(NEXT_MATCH.kickoff);

  const visibleUpdates =
    filter === "All" ? UPDATES : UPDATES.filter((u) => u.category === filter);

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Albion Fan Hub home">
            <span className="brand-icon" aria-hidden="true">
              A
            </span>
            <span>
              <strong>Albion Fan Hub</strong>
              <small>Your matchday, made simple</small>
            </span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#matchday">Matchday</a>
            <a href="#essentials">Essentials</a>
            <a href="#updates">Updates</a>
          </nav>
        </div>
      </header>

      <main id="main" className="dashboard">
        <section id="home" className="hero">
          <p className="eyebrow">Your matchday dashboard</p>
          <h1>Everything you need, in one place.</h1>
          <p className="intro">
            Find match information and plan your visit without the hassle.
          </p>
        </section>

        <section id="matchday" className="match-card" aria-labelledby="match-title">
          <div className="match-card-top">
            <span className="section-label">Next match</span>
            <span className="home-badge">Home</span>
          </div>

          <h2 id="match-title">
            {NEXT_MATCH.home} <span className="vs">vs</span> {NEXT_MATCH.away}
          </h2>
          <p className="match-date">{dateText}</p>
          <p className="stadium">
            <span aria-hidden="true">📍</span> {NEXT_MATCH.venue}
          </p>

          <div className="countdown" role="timer" aria-label="Time until kick-off">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Mins" },
            ].map((unit) => (
              <div className="count-box" key={unit.label}>
                <strong>{String(unit.value).padStart(2, "0")}</strong>
                <span>{unit.label}</span>
              </div>
            ))}
          </div>

          <div className="match-actions">
            <a className="btn btn-primary" href="#essentials">
              Plan my visit
            </a>
            <a className="btn btn-ghost" href="#updates">
              Latest updates
            </a>
          </div>

          <p className="example-note">Example fixture – not live match data</p>
        </section>

        <section id="essentials" className="section" aria-labelledby="essentials-title">
          <h2 id="essentials-title">Matchday essentials</h2>
          <div className="essential-grid">
            {ESSENTIALS.map((item) => (
              <article className="essential-card" key={item.title}>
                <span className="card-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#updates" onClick={() => setFilter(item.category)}>
                  Explore {item.title.toLowerCase()} <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="updates" className="section" aria-labelledby="updates-title">
          <div className="section-head">
            <h2 id="updates-title">Latest updates</h2>
            <div className="filters" role="group" aria-label="Filter updates">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  className="chip"
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <p className="last-checked">Example updates – not live data</p>

          <div className="updates-list">
            {visibleUpdates.map((u) => (
              <article className="update-item" key={u.title}>
                <div className="update-heading">
                  <span className="update-category">{u.category}</span>
                  <span className="update-time">{u.time}</span>
                </div>
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Albion Fan Hub – a concept project. Not an official club product.</p>
      </footer>
    </div>
  );
}

export default App;