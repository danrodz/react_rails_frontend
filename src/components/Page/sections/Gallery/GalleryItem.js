import React, { Fragment } from 'react';
import { Col, Thumbnail } from 'react-bootstrap';

const GalleryItem = props => {
  const {
    src = 'https://placeimg.com/640/480/any',
    alt = 'alt',
    onImageThumbnailClick
  } = props;
  return (
    <Fragment>
      <Col xs={6} md={3}>
        <Thumbnail
          onClick={() => onImageThumbnailClick(src)}
          responsive
          src={src}
          alt={alt}
        />
      </Col>
    </Fragment>
  );
};

export default GalleryItem;
