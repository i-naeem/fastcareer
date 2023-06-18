import { Box, Heading } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';

const App = () => {
  return (
    <Box>
      <Header />
      <Box as='main' p={4} minH='calc(100vh - 70px - 70px)'>
        <Box p='3'>
          <Heading size='lg' mb='1' align='center'>
            Aipply - Ai Job Board
          </Heading>
        </Box>
        <Box as='section' p='3' mb='3'>
          <Searchbar />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
