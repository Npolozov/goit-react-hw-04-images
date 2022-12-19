import { Item, ImageGalleryItemimage } from './ImageGalleryItem';
import { ImageModal } from 'components/Modal/Modal';
import { useState } from 'react';

export const ImageGalleryItem = ({ hit: { largeImageURL, webformatURL } }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const toggleImageModal = () => {
    setIsImageModalOpen(!isImageModalOpen);
  };

  return (
    <>
      <Item>
        <ImageGalleryItemimage
          src={webformatURL}
          alt="image"
          onClick={toggleImageModal}
        />
      </Item>
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={toggleImageModal}
        img={largeImageURL}
      />
    </>
  );
};
