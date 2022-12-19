import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { imageByName } from 'api';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadMore } from 'components/Button/Button';
import { Section } from './App.styled';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const [page, setPage] = useState(1);
  const [image, setImage] = useState('');
  const [error, setError] = useState(null);
  const [photo, setPhoto] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlelFormSubmit = image => {
    if (!image) {
      toast.error('Ввдедіть дані для пошуку!!!');
      return;
    }
    setPage(1);
    setImage(image);
    setError(null);
    setPhoto('');
    setIsLoading(false);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    async function getImage() {
      try {
        setIsLoading(true);
        const photo = await imageByName(image, page);
        console.log(image);
        console.log(page);
        if (photo.length === 0) {
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          return;
        }
        setPhoto(prevState => [...prevState, ...photo]);
      } catch (error) {
        toast.error('Нет данных');
      } finally {
        setIsLoading(false);
      }
    }
    getImage();
  }, [image, page]);

  return (
    <Section>
      <Searchbar onSubmit={handlelFormSubmit} />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {image && <ImageGallery hits={photo} />}
      {photo.length >= 12 && <LoadMore onClick={loadMore} />}
      <ToastContainer autoClose={2000} position="top-right" />
    </Section>
  );
};

// export class App extends Component {
//   state = {
//     page: 1,
//     image: '',
//     error: null,
//     photo: [],
//     isLoading: false,
//   };

//   handlelFormSubmit = image => {
//     if (!image) {
//       toast.error('Ввдедіть дані для пошуку!!!');
//       return;
//     }
//     this.setState({
//       page: 1,
//       image,
//       error: null,
//       photo: [],
//       isLoading: false,
//     });
//   };

//   loadMore = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   async componentDidUpdate(_, prevState) {
//     if (
//       prevState.page !== this.state.page ||
//       prevState.image !== this.state.image
//     ) {
//       try {
//         this.setState({ isLoading: true });
//         const { image, page } = this.state;
//         console.log();
//         console.log();
//         const photo = await imageByName(image, page);
//         console.log(image);
//         console.log(page);
//         if (photo.length === 0) {
//           toast.error(
//             'Sorry, there are no images matching your search query. Please try again.'
//           );
//           return;
//         }
//         this.setState(prevState => ({
//           photo: [...prevState.photo, ...photo],
//         }));
//       } catch (error) {
//         toast.error('Нет данных');
//       } finally {
//         this.setState({ isLoading: false });
//       }
//     }
//   }

//   render() {
//     const { error, image, photo, isLoading } = this.state;
//     console.log(photo);
//     return (
//       <Section>
//         <Searchbar onSubmit={this.handlelFormSubmit} />
//         {isLoading && <Loader />}
//         {error && <p>{error}</p>}
//         {image && <ImageGallery hits={photo} />}
//         {photo.length >= 12 && <LoadMore onClick={this.loadMore} />}
//         <ToastContainer autoClose={2000} position="top-right" />
//       </Section>
//     );
//   }
// }
