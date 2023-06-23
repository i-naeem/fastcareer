import Job from './routes/Job';
import Home from './routes/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './routes/NotFound';
import { Box, Center, Container, useStatStyles } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './routes/Search';
import { useState } from 'react';

const App = () => {
  const [endpoint, setEndpoint] = useState();

  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Container maxW='container.xl'>
          <Box as='main' minH='calc(100vh - 70px - 70px)'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route
                exact
                path='/search/:q'
                element={<SearchPage key={endpoint} setEndpoint={setEndpoint} />}
              />
              <Route exact path='/search' element={<Home />} />
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
