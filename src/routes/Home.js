import { Box, Heading } from '@chakra-ui/react';
import Searchbar from '../components/Searchbar';

const Home = props => {
  return (
    <>
      <Box p='3'>
        <Heading size='lg' mb='1' align='center'>
          Aipply - Ai Job Board
        </Heading>
      </Box>
      <Box as='section' p='3' mb='3'>
        <Searchbar />
      </Box>
    </>
  );
};

export default Home;
