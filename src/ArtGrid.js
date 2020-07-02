import React from 'react'
import {initialState} from './InitalState'
import './ArtGrid.css'

class ArtGrid extends React.Component {
constructor(props) {
    super(props);
 
    this.state = {
        currentArt: initialState,
    };
    this.filterByArtist = this.filterByArtist.bind(this);
    this.getAllItems = this.getAllItems.bind(this);
    this.getPurchasedItems = this.getPurchasedItems.bind(this);
    this.getAvailableItems = this.getAvailableItems.bind(this);
  }

filterByArtist = (artistName) => 
    this.setState({
        currentArt: initialState.filter(art => art.artist === artistName)
    });

getAllItems = () => this.setState({
        currentArt: initialState
    });

getPurchasedItems = () => this.setState({
        currentArt: initialState.filter(art => art.buyer !== '')
    });

getAvailableItems = () => this.setState({
        currentArt: initialState.filter(art => art.buyer === '')
    });

  render() {
    return (
      <div> 
        <div className = "buttons-wrapper">
            <button className = "filterButton" onClick={() => this.getPurchasedItems()}>Purchased</button>
            <button className = "filterButton" onClick={() => this.getAvailableItems()}>Available</button>
            <button className = "filterButton" onClick={() => this.getAllItems()}>Show All</button>
        </div>
        <div className="catalog-wrapper">
            {this.state.currentArt.map(art => 
            <figure key = {art.artpiece} className = "artwork"> 
              <img  src = {art.artpiece} alt = 'art-piece'></img>
              <div className = "art-piece-info">  
                <span className= 'artist' onClick={() => this.filterByArtist(art.artist)}><span><b>Artist: </b></span>{art.artist}</span>
                <br/>
                {art.buyer === '' ? 
                <span style={{color: 'green'}}>Available</span> 
                :
                <span className= 'buyer'><span><b>Buyer: </b></span>{art.buyer}</span>
                }
              </div>
            </figure>)
            }
        </div>
    </div> 
    );
  }
}

export default ArtGrid;