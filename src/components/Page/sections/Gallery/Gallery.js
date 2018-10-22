import React from 'react';
import { Row } from 'react-bootstrap';

import CarouselGallery from './CarouselGallery';
import GalleryItem from './GalleryItem';
import ImageUploadTool from '../../../../shared/components/ImageUploadTool/ImageUploadTool';

const Gallery = props => {
  const { onImageThumbnailClick } = props;
  return (
    <div className="container-fluid">
      <Row>
        <ImageUploadTool />
      </Row>
      <Row>
        <CarouselGallery />
      </Row>
      <br />
      <Row>
        <GalleryItem onImageThumbnailClick={onImageThumbnailClick} />
        <GalleryItem onImageThumbnailClick={onImageThumbnailClick} />
        <GalleryItem onImageThumbnailClick={onImageThumbnailClick} />
        <GalleryItem onImageThumbnailClick={onImageThumbnailClick} />
      </Row>
    </div>
  );
};

export default Gallery;
