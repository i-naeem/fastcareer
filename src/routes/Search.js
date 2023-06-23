import useFetch from 'react-fetch-hook';
import JobCard from '../components/JobCard';
import { Box, Stack, useStatStyles } from '@chakra-ui/react';
import Searchbar from '../components/Searchbar';
import CallToAction from '../components/CallToAction';
import { useState } from 'react';
import _ from 'lodash';
import { useParams } from 'react-router-dom';

const SearchPage = ({ setEndpoint }) => {
  const params = useParams();
  const { data, isLoading, error } = useFetch(`http://localhost:5000/query/${params.q}`);

  const [location, setLocation] = useState('');

  const onLocationChange = event => {
    setLocation(event.target.value);
  };

  return (
    <>
      <Box p='3' as='section'>
        <CallToAction />
      </Box>
      <Box as='section' p='3' mb='3'>
        <Searchbar onLocationChange={onLocationChange} q={params.q} setEndpoint={setEndpoint} />
      </Box>
      <Box p='3' as='section'>
        <Box>
          <Stack align='start'>
            {data &&
              data
                .filter(
                  item => location === '' || item.location.toLowerCase() === location.toLowerCase(),
                )
                .map(post => <JobCard post={post} />)}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default SearchPage;
