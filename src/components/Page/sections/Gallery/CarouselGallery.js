import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';

class CarouselGallery extends Component {
  state = {
    index: 0,
    direction: null
  };

  handleSelect = (index, { direction }) => {
    this.setState({ index, direction });
  };

  render() {
    const label = 'label';
    const src = 'https://placeimg.com/1600/800/';
    const caption = 'caption';
    const { index, direction } = this.state;
    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}>
        <Carousel.Item>
          <Image responsive alt={label} src={src + 'people'} />
          <h3>{label}</h3>
          <p>{caption}</p>
        </Carousel.Item>
        <Carousel.Item>
          <Image responsive alt={label} src={src + 'animals'} />
          <h3>{label}</h3>
          <p>{caption}</p>
        </Carousel.Item>
        <Carousel.Item>
          <Image responsive alt={label} src={src + 'nature'} />
          <h3>{label}</h3>
          <p>{caption}</p>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselGallery;
