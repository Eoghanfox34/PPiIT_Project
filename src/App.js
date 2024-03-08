import React from 'react';
// Importing Bootstrap for styling
import 'bootstrap/dist/css/bootstrap.min.css';
// Import images used in the cards
import leagueTableImg from './league_table.jpg'; // Adjust path as needed
import statsImg from './stats.jpg'; // Adjust path as needed
import uniformImg from './uniform.jpg'; // Adjust path as needed

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Soccer History Hub</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leagues</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Players</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Kits</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="py-5 bg-light border-bottom mb-4">
        <div className="container">
          <div className="text-center">
            <h1>Welcome to Soccer History Hub</h1>
            <p className="lead">Your one-stop destination for historical soccer league tables, player information, and kit history.</p>
          </div>
        </div>
      </header>

      {/* Main Content Section with Cards */}
      <div className="container">
        <div className="row">
          {/* Card for League Tables */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={leagueTableImg} className="card-img-top" alt="League Table"/>
              <div className="card-body">
                <h5 className="card-title">League Tables</h5>
                <p className="card-text">Explore historical league tables from the top leagues around the world.</p>
                <a href="#" className="btn btn-primary">View Leagues</a>
              </div>
            </div>
          </div>

          {/* Card for Player Information */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={statsImg} className="card-img-top" alt="Player Info"/>
              <div className="card-body">
                <h5 className="card-title">Player Information</h5>
                <p className="card-text">Discover stats and historical data about your favorite players.</p>
                <a href="#" className="btn btn-primary">Find Players</a>
              </div>
            </div>
          </div>

          {/* Card for Kit History */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={uniformImg} className="card-img-top" alt="Kit History"/>
              <div className="card-body">
                <h5 className="card-title">Kit History</h5>
                <p className="card-text">Take a look at the evolution of team kits over the years.</p>
                <a href="#" className="btn btn-primary">Explore Kits</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
