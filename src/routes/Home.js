import { Box, HStack, Heading, Image } from '@chakra-ui/react';
import Searchbar from '../components/Searchbar';
import CatImage from '../assets/cat.png';

const Home = props => {
  return (
    <>
      <Box p='3'>
        <HStack justify='space-between'>
          <Box>
            <Heading size='3xl' mb='3'>
              Ready for a <br /> career change?
            </Heading>
            <Heading size='xl'>Let us do the work for you</Heading>
          </Box>
          <Box>
            <Image alt='A cat with laptop for decoration' src={CatImage} maxBlockSize='300' />
          </Box>
        </HStack>
      </Box>
      <Box as='section' p='3' mb='3'>
        <Searchbar />
      </Box>
    </>
  );
};

export default Home;
