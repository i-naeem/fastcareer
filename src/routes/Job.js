import { useRef } from 'react';
import JobCard from '../components/JobCard';
import CoverLetterDrawer from '../components/CoverLetterDrawer';
import {
  Box,
  Flex,
  Text,
  Button,
  Heading,
  ButtonGroup,
  useDisclosure,
  Link,
} from '@chakra-ui/react';
import useFetch from 'react-fetch-hook';
import { useParams } from 'react-router-dom';
import ListWrapper from '../components/ListWrapper';

const Job = props => {
  const { post_id } = useParams();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef();

  console.log(post_id);
  const { isLoading, error, data: post } = useFetch(`http://localhost:5000/posts/${post_id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Box pt='5'>
      <Box mb='4'>
        <JobCard post={post} isJobPage />
      </Box>
      <Box mb='4'>
        <Heading size='lg' mb='2'>
          Job Description
        </Heading>
        <Text fontSize='md' dangerouslySetInnerHTML={{ __html: post.description }} />
      </Box>
      {post.skills?.length !== 0 ? (
        <ListWrapper heading='Skills Required' items={post.skills} />
      ) : (
        ''
      )}
      <Flex justifyContent='end' pb='4'>
        <ButtonGroup>
          <Button colorScheme='green' as={Link} target='_blank' href={post.source}>
            Apply Now
          </Button>
          <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
            Write me cover letter
          </Button>
        </ButtonGroup>
      </Flex>
      <CoverLetterDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Box>
  );
};

export default Job;
