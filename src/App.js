import Job from './routes/Job';
import Home from './routes/Home';
import { Box, Center, Container } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './routes/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Container maxW='container.xl'>
          <Box as='main' minH='calc(100vh - 70px - 70px)'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/posts/:post_id' element={<Job />} />
              <Route exact path='*' element={<NotFound />} />
            </Routes>
          </Box>
        </Container>
      </Box>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
