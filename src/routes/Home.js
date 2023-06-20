import JobCard from '../components/JobCard';
import Searchbar from '../components/Searchbar';
import CallToAction from '../components/CallToAction';
import { Box, Stack } from '@chakra-ui/react';

const Home = props => {
  return (
    <>
      <Box p='3' as='section'>
        <CallToAction />
      </Box>
      <Box as='section' p='3' mb='3'>
        <Searchbar />
      </Box>
      <Box p='3' as='section'>
        <Box>
          <Stack align='start'>
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Home;
