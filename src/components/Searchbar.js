import { Icon, Input, Select, HStack, InputGroup, InputLeftElement, Flex } from '@chakra-ui/react';
import { FaSearch as SearchIcon } from 'react-icons/fa';
import SelectWrapper from '../components/SelectionWrapper';
import { filterOptions } from '../constants';

const Searchbar = props => {
  return (
    <form>
      <Flex>
        <InputGroup mb='2' size='lg' width='70%'>
          <InputLeftElement>
            <Icon as={SearchIcon} />
          </InputLeftElement>
          <Input
            type='search'
            id='search-input'
            variant='outline'
            borderRightRadius='0'
            placeholder='Enter your search query...'
          />
        </InputGroup>
        <Select placeholder='Location' size='lg' width='30%' borderLeftRadius='0'>
          <option>hello</option>
        </Select>
      </Flex>
      <HStack>
        {filterOptions.map(filter => (
          <SelectWrapper
            placeholder={filter.placeholder}
            options={filter.options}
            key={filter.id}
          />
        ))}
      </HStack>
    </form>
  );
};

export default Searchbar;
