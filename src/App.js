import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box>
      <Header />
      <Box as='main' p={4} minH='calc(100vh - 70px - 70px)'>
        <h1>Hello World</h1>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
