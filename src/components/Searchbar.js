import { HStack, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FaSearch as SearchIcon } from 'react-icons/fa';

const Searchbar = props => {
  return (
    <form>
      <HStack mb='2'>
        <InputGroup>
          <Input id='search-input' placeholder='Enter your search query...' />
          <InputRightElement>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
      </HStack>
    </form>
  );
};

export default Searchbar;
