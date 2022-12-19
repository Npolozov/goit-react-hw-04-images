import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import { List } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ hits }) => {
  console.log(hits);
  return (
    <List>
      {hits.map(hit => (
        <ImageGalleryItem key={hit.id} hit={hit} />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.array.isRequired,
};
