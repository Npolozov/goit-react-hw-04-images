import { Button } from './Button.styled';
import PropTypes from 'prop-types';


export const LoadMore = ({ onClick }) => {
  return <Button onClick={onClick}>Load More</Button>;
};

LoadMore.propTypes = {
  onClick: PropTypes.func,
};
