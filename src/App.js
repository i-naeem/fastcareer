import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './routes/NotFound';
import Home from './routes/Home';
import Job from './routes/Job';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import usePosts from './hooks/usePosts';

const App = () => {
  const { isError, isLoading, posts } = usePosts();
  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Box as='main' p={4} minH='calc(100vh - 70px - 70px)'>
          <Routes>
            <Route
              exact
              path='/'
              element={<Home posts={posts} isError={isError} isLoading={isLoading} />}
            />
            <Route
              exact
              path='/posts/:post_id'
              element={<Job posts={posts} isError={isError} isLoading={isLoading} />}
            />
            <Route exact path='*' element={<NotFound />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export default App;
