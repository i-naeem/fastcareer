import {
  Icon,
  Flex,
  Input,
  Select,
  HStack,
  Button,
  InputGroup,
  ButtonGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { GrFormClose } from 'react-icons/gr';
import { FaSearch as SearchIcon } from 'react-icons/fa';
import SelectWrapper from '../components/SelectionWrapper';
import { filterOptions } from '../constants';
import { useState } from 'react';

const Searchbar = props => {
  const [filters, setFilters] = useState([]);

  const onFilterChange = (t, v) => {
    if (!v) {
      return;
    }

    const ps = filters.find(f => f.t === t && f.v === v);
    if (ps) {
      return;
    }

    setFilters(() => [...filters, { t, v }]);
  };

  const onFilterRemove = (t, v) => {
    setFilters(() => [...filters.filter(f => !(f.t === t && f.v === v))]);
  };
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
        <Select
          size='lg'
          width='30%'
          borderLeftRadius='0'
          placeholder='Location'
          onChange={e => onFilterChange('location', e.target.value)}
        >
          <option value='Lahore'>Lahore</option>
        </Select>
      </Flex>
      <HStack pb='5'>
        {filterOptions.map(filter => (
          <SelectWrapper key={filter.id} filter={filter} onChange={onFilterChange} />
        ))}
      </HStack>
      <ButtonGroup size='sm'>
        {filters.length ? <Button variant='ghost'> Filters</Button> : null}
        {filters.map((filter, idx) => (
          <Button
            key={idx}
            rightIcon={<GrFormClose />}
            onClick={e => onFilterRemove(filter.t, filter.v)}
          >
            {filter.v}
          </Button>
        ))}
      </ButtonGroup>
    </form>
  );
};

export default Searchbar;
