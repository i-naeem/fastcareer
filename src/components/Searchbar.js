import { HStack, Input, InputGroup, InputRightElement, Select } from '@chakra-ui/react';
import { FaSearch as SearchIcon } from 'react-icons/fa';
import { filterOptions } from '../constants';

const Searchbar = props => {
  return (
    <form>
      <InputGroup mb='2'>
        <Input id='search-input' placeholder='Enter your search query...' />
        <InputRightElement>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>
      <HStack>
        {filterOptions.map(filter => (
          <Select placeholder={filter.placeholder} key={filter.id}>
            {filter.options.map((option, idx) => (
              <option key={idx}>{option}</option>
            ))}
          </Select>
        ))}
      </HStack>
    </form>
  );
};

export default Searchbar;
