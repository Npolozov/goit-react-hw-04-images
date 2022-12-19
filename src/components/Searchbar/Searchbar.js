import { Component } from 'react';
import {
  Header,
  SearchForm,
  SearchFormButton,
  Label,
  Input,
} from './Searchbar.styled';
import { FiSearch } from 'react-icons/fi';

export class Searchbar extends Component {
  state = {
    image: '',
  };

  handelFormChange = event => {
    this.setState({ image: event.currentTarget.value.toLowerCase() });
  };

  handelSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.image);
    this.setState({ image: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handelSubmit}>
          <SearchFormButton type="submit">
            <FiSearch width="50px" />
            <Label>Search</Label>
          </SearchFormButton>

          <Input
            type="text"
            value={this.state.image}
            // autocomplete="off"
            // autofocus
            onChange={this.handelFormChange}
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}
