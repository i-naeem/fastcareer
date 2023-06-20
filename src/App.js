import Header from './components/Header';
import Footer from './components/Footer';
import { Box } from '@chakra-ui/react';
import Job from './routes/Job';
import Home from './routes/Home';

const App = () => {
  return (
    <Box>
      <Header />
      <Box as='main' p={4} minH='calc(100vh - 70px - 70px)'>
        <Home />
        {/* <Job /> */}
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
