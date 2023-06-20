import JobCard from '../components/JobCard';
import Searchbar from '../components/Searchbar';
import CallToAction from '../components/CallToAction';
import { Box, HStack } from '@chakra-ui/react';

const Home = props => {
  return (
    <>
      <Box p='3' as='section'>
        <HStack justify='space-between'>
          <CallToAction />
        </HStack>
      </Box>
      <Box as='section' p='3' mb='3'>
        <Searchbar />
      </Box>
      <Box p='3' as='section'>
        <Box>
          <HStack align='start'>
            <JobCard />
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Home;
