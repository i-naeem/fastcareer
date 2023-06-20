import {
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
} from '@chakra-ui/react';
import { FaSearch as SearchIcon } from 'react-icons/fa';
import { filterOptions } from '../constants';

const Searchbar = props => {
  return (
    <form>
      <InputGroup mb='2' size='lg'>
        <InputLeftElement>
          <Icon as={SearchIcon} />
        </InputLeftElement>
        <Input
          type='search'
          id='search-input'
          variant='outline'
          placeholder='Enter your search query...'
        />
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
