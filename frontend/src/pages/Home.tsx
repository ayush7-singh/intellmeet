import { Link } from 'react-router-dom'
import '../App.css'

export default function Home() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">IntellMeet</div>

        <nav>
          <Link to="/">Home</Link>
          <a href="#">Features</a>
          <a href="#">How It Works</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </nav>

        <div className="nav-buttons">
          <Link to="/login" className="signin">
  Sign In
</Link>
         <Link to="/register" className="start">
  Get Started
</Link>
        </div>
      </header>

      <section className="hero">
        <div className="hero-left">
          <div className="badge">AI-Powered Meetings</div>

          <h1>
            Smarter Meetings,
            <br />
            <span>Better Outcomes</span>
          </h1>

          <p>
            IntellMeet is your AI meeting assistant that records,
            transcribes, summarizes, and helps your team collaborate
            effectively.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Start Your Free Meeting
            </button>

            <button className="secondary-btn">
              Watch Demo
            </button>
          </div>

          <div className="features-row">
            <span>AI Transcription</span>
            <span>Smart Summaries</span>
            <span>Secure & Private</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="meeting-card">
            <div className="meeting-header">
              <h3>IntellMeet Meeting</h3>
              <span className="recording">REC</span>
            </div>

            <div className="video-grid">
              <div className="video-box">
                <img src="https://i.pravatar.cc/300?img=1" />
              </div>

              <div className="video-box">
                <img src="https://i.pravatar.cc/300?img=2" />
              </div>

              <div className="video-box">
                <img src="https://i.pravatar.cc/300?img=3" />
              </div>

              <div className="video-box">
                <img src="https://i.pravatar.cc/300?img=4" />
              </div>
            </div>

            <div className="controls">
              <button>🎤</button>
              <button>📹</button>
              <button>🖥️</button>
              <button className="end-call">📞</button>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Everything you need for productive meetings</h2>

        <div className="cards">
          <div className="feature-card">
            <h3>AI Transcription</h3>

            <p>
              Real-time transcription with AI powered
              accuracy across multiple languages.
            </p>
          </div>

          <div className="feature-card">
            <h3>Smart Summaries</h3>

            <p>
              Automatic meeting summaries,
              action items, and key insights.
            </p>
          </div>

          <div className="feature-card">
            <h3>Team Collaboration</h3>

            <p>
              Collaborate with your team in
              real-time from anywhere.
            </p>
          </div>

          <div className="feature-card">
            <h3>Secure & Private</h3>

            <p>
              Enterprise-grade encryption
              and privacy protection.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}