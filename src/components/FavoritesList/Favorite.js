import React, { Component } from "react";
import axios from "axios";
import "./FavoritesList.css";

export default class Favorite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: [],
      beerId: 0,
      favorites: [],
      userid: [],
      beerimg: [],
      beerdesc: [],
      foodpairing: [],
      brewerstips: [],
      beername: []
    };
    this.addToFavs = this.addToFavs.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then(results => {
        results.data.map((element, index) => {
          this.setState({
            beer: results.data,
            beerId: results.data[index].id,
            beerimg: results.data[index].image_url,
            beerdesc: results.data[index].description,
            foodpairing: results.data[index].food_pairing,
            brewerstips: results.data[index].brewers_tips,
            beername: results.data[index].name
          });
        });
      })
      .catch(console.log);

    axios.get("/api/me").then(response => {
      if (!response.data) this.setState({ userid: null });
      else this.setState({ userid: response.data.id });
    });
  }

  addToFavs(beer) {
    axios
      .post("http://localhost:3001/api/favorites", {
        userid: this.state.userid,
        id: beer.id,
        image_url: beer.image_url,
        description: beer.description,
        food_pairing: beer.food_pairing,
        brewers_tips: beer.brewers_tips,
        name: beer.name
      })
      .then(response => {
        console.log(response);
        this.setState({ favorites: response.data });
      })
      .catch(console.log);
  }

  render() {
    const beers = this.state.beer.map((beer, index) => (
      <div className="tile is-6" key={index}>
        <ul>
          <button
            className="button is-primary"
            key={index}
            onClick={() => this.addToFavs(beer)}
          >
            LIKE ❤
          </button>

          <li>{beer.name}</li>

          <li>
            <img src={beer.image_url} alt="beer" />
          </li>
        </ul>
      </div>
    ));

    return (
      <div className="tile is-ancestor">
        <div className="tile is-4">{beers}</div>
      </div>
    );
  }
}
