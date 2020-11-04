import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import Loading from './Loading';

import { Container, Content } from './styles';

const Search: React.FC = () => {
  const [query, setQuery] = React.useState('');
  return (
    <Container>
      <Content>
        <RiSearchLine />
        <input
          type="text"
          placeholder="Pesquisar..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          autoComplete="off"
        />
        <Loading />
      </Content>
    </Container>
  );
};

export default Search;
