import { Box } from '@chakra-ui/react';
import Header from './components/Header';

const App = () => {
  return (
    <Box>
      <Header />
      <Box as='main'>Main</Box>
      <Box as='footer'>Footer</Box>
    </Box>
  );
};

export default App;
