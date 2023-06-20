import { Box, HStack } from '@chakra-ui/react';
import Searchbar from '../components/Searchbar';
import CallToAction from '../components/CallToAction';

const Home = props => {
  return (
    <>
      <Box p='3'>
        <HStack justify='space-between'>
          <CallToAction />
        </HStack>
      </Box>
      <Box as='section' p='3' mb='3'>
        <Searchbar />
      </Box>
    </>
  );
};

export default Home;
