import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ArtGrid from './ArtGrid';
import ContactUs from './ContactUs';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <main>
      <Navbar />
        <div className="App">
          <header className="App-header">
            Nature & Wildlife Art Gallery
          </header>
        </div>
        <Switch>
            <Route path="/" component={ArtGrid} exact />
            <Route path="/art-gallery" component={ArtGrid} />
            <Route path="/contact-us" component={ContactUs} />
        </Switch>
      </main>
  );
}

export default App;