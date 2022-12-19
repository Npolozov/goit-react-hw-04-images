import { Item, ImageGalleryItemimage } from './ImageGalleryItem';
import { ImageModal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isImageModalOpen: false,
  };

  toggleImageModal = () => {
    this.setState(prevState => ({
      isImageModalOpen: !prevState.isImageModalOpen,
    }));
  };

  render() {
    const { isImageModalOpen } = this.state;
    const {
      hit: { webformatURL, largeImageURL },
    } = this.props;
    console.log(largeImageURL);
    return (
      <>
        <Item>
          <ImageGalleryItemimage
            src={webformatURL}
            alt="image"
            onClick={this.toggleImageModal}
          />
        </Item>
        <ImageModal
          isOpen={isImageModalOpen}
          onClose={this.toggleImageModal}
          img={largeImageURL}
        />
      </>
    );
  }
}
