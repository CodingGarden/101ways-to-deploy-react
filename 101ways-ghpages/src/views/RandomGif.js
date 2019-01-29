import React, { Component } from 'react'

const GIF_URL = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=funny&rating=PG';

export default class RandomGif extends Component {
  state = {
    url: 'https://media.giphy.com/media/l3nWhI38IWDofyDrW/giphy-downsized.gif'
  }

  componentDidMount = async () => {
    const response = await fetch(GIF_URL);
    const json = await response.json();
    this.setState({
      url: json.data.image_original_url
    });
  }
  
  render() {
    const { url } = this.state;
    return (
      <div>
        <img src={url} alt="gif" />
      </div>
    )
  }
}
