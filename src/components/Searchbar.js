import { Icon, Flex, Input, Select, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaSearch as SearchIcon } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Searchbar = ({ onLocationChange, q, setEndpoint }) => {
  const navigate = useNavigate();

  const onSearch = event => {
    event.preventDefault();
    let q = event.target.q.value;

    if (setEndpoint) {
      setEndpoint(q);
    }
    navigate(`/search/${q}`);
  };

  const locations = ['Karachi', 'Malakand', 'Faisalabad', 'Multan', 'Gujranwala', 'Sialkot', 'Rawalpindi', 'Islamabad', 'Peshawar', 'Lahore', 'Quetta', 'Multiple Cities']
  const options = locations.map((location,idx) => <option key={idx} value={location}>{location}</option>)
  return (
    <form onSubmit={onSearch}>
      <Flex>
        <InputGroup mb='2' size='lg' width='70%'>
          <InputLeftElement>
            <Icon as={SearchIcon} />
          </InputLeftElement>
          <Input
            name='q'
            id='q'
            defaultValue={q ? q : ''}
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
          onChange={onLocationChange}
        >
          {options}
        </Select>
      </Flex>
    </form>
  );
};

export default Searchbar;
