import { Icon, Flex, Input, Select, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaSearch as SearchIcon } from 'react-icons/fa';

const Searchbar = props => {
  return (
    <form>
      <Flex>
        <InputGroup mb='2' size='lg' width='70%'>
          <InputLeftElement>
            <Icon as={SearchIcon} />
          </InputLeftElement>
          <Input
            id='q'
            type='search'
            variant='outline'
            borderRightRadius='0'
            placeholder='Enter your search query...'
          />
        </InputGroup>
        <Select size='lg' width='30%' borderLeftRadius='0' placeholder='Location'>
          <option value='Lahore'>Lahore</option>
        </Select>
      </Flex>
    </form>
  );
};

export default Searchbar;
