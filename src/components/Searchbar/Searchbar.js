import { useState } from 'react';
import {
  Header,
  SearchForm,
  SearchFormButton,
  Label,
  Input,
} from './Searchbar.styled';
import { FiSearch } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';

export const Searchbar = ({ onSubmit }) => {
  const [image, setImage] = useState('');
  console.log(image);

  const handelFormChange = event => {
    setImage(event.currentTarget.value.toLowerCase());
  };

  const handelSubmit = e => {
    e.preventDefault();
    if (image.trim() === '') {
      toast.error('Введите название картинки');
    }
    onSubmit(image);
    setImage('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handelSubmit}>
        <SearchFormButton type="submit">
          <FiSearch width="50px" />
          <Label>Search</Label>
        </SearchFormButton>

        <Input
          type="text"
          value={image}
          // autocomplete="off"
          // autofocus
          onChange={handelFormChange}
          placeholder="Search images and photos"
        />
      </SearchForm>
      <ToastContainer autoClose={2000} position="top-right" />
    </Header>
  );
};

// export class Searchbar extends Component {
//   state = {
//     image: '',
//   };

//   handelFormChange = event => {
//     this.setState({ image: event.currentTarget.value.toLowerCase() });
//   };

//   handelSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.image);
//     this.setState({ image: '' });
//   };

//   render() {
//     return (
//       <Header>
//         <SearchForm onSubmit={this.handelSubmit}>
//           <SearchFormButton type="submit">
//             <FiSearch width="50px" />
//             <Label>Search</Label>
//           </SearchFormButton>

//           <Input
//             type="text"
//             value={this.state.image}
//             // autocomplete="off"
//             // autofocus
//             onChange={this.handelFormChange}
//             placeholder="Search images and photos"
//           />
//         </SearchForm>
//       </Header>
//     );
//   }
// }
