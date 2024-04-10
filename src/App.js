import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LeagueTables from './Components/LeagueTables';
import PlayerStats from './Components/PlayerStats';
import LeagueTable_Hardcoded from './Components/LeagueTable_Hardcoded';
import Kits from './Components/Kits';
import leagueTableImg from './league_table.jpg';
import statsImg from './stats.jpg';
import uniformImg from './uniform.jpg';


function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Soccer History Hub</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leagues">Leagues</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/players">Players</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/kits">Kits</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <header className="py-5 bg-light border-bottom mb-4">
                <div className="container">
                  <div className="text-center">
                    <h1>Welcome to Soccer History Hub</h1>
                    <p className="lead">Your one-stop destination for historical soccer league tables, player information, and kit history.</p>
                  </div>
                </div>
              </header>

              <div className="container">
                <div className="row">
                  {/* League Tables Card */}
                  <div className="col-md-4 mb-4">
                    <div className="card h-100">
                      <img src={leagueTableImg} className="card-img-top" alt="League Table"/>
                      <div className="card-body">
                        <h5 className="card-title">League Tables</h5>
                        <p className="card-text">Explore historical league tables from the top leagues around the world.</p>
                        <Link to="/leagues" className="btn btn-primary">View Leagues</Link>
                      </div>
                    </div>
                  </div>

                  {/* Player Information Card */}
                  <div className="col-md-4 mb-4">
                    <div className="card h-100">
                      <img src={statsImg} className="card-img-top" alt="Player Info"/>
                      <div className="card-body">
                        <h5 className="card-title">Player Information</h5>
                        <p className="card-text">Discover stats and historical data about your favorite players.</p>
                        <Link to="/players" className="btn btn-primary">Find Players</Link>
                      </div>
                    </div>
                  </div>

                  {/* Kit History Card */}
                  <div className="col-md-4 mb-4">
                    <div className="card h-100">
                      <img src={uniformImg} className="card-img-top" alt="Kit History"/>
                      <div className="card-body">
                        <h5 className="card-title">Kit History</h5>
                        <p className="card-text">Take a look at the evolution of team kits over the years.</p>
                        <Link to="/kits" className="btn btn-primary">Explore Kits</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          } />
          <Route path="/leagues" element={<LeagueTable_Hardcoded />} />
          <Route path="/players" element={<PlayerStats />} />
          <Route path="/kits" element={<Kits />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
