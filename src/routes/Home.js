import JobCard from '../components/JobCard';
import { Box, Stack } from '@chakra-ui/react';
import Searchbar from '../components/Searchbar';
import CallToAction from '../components/CallToAction';

const Home = ({ isError, isLoading, posts }) => {
  if (isError || isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Box p='3' as='section'>
        <CallToAction />
      </Box>
      <Box as='section' p='3' mb='3'>
        <Searchbar />
      </Box>
      <Box p='3' as='section'>
        <Box>
          <Stack align='start'>{posts && posts.map(post => <JobCard post={post} />)}</Stack>
        </Box>
      </Box>
    </>
  );
};

export default Home;
