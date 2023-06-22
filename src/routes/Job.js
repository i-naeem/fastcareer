import { useRef } from 'react';
import JobCard from '../components/JobCard';
import { redirect, useParams } from 'react-router-dom';
import CoverLetterDrawer from '../components/CoverLetterDrawer';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

const Job = ({ isError, isLoading, posts }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef();

  const params = useParams();
  const post_id = params.post_id;

  if (isError || isLoading) {
    return <h1>Loading...</h1>;
  }

  const post = posts.find(p => p.id == post_id);

  if (!post) {
    redirect('/404');
  }

  return (
    <Box>
      <Box mb='4'>
        <JobCard post={post} />
      </Box>
      <Box mb='4'>
        <Heading size='lg' mb='2'>
          About {post.company}
        </Heading>
        <Text fontSize='md'>{post.about_company}</Text>
      </Box>
      <Box mb='4'>
        <Heading size='lg' mb='2'>
          Job Description
        </Heading>
        <Text fontSize='md'>{post.description}</Text>
      </Box>
      <Box mb='4'>
        <Heading size='lg' mb='2'>
          Skills
        </Heading>
        <List>
          {post.skills.map((s, i) => (
            <ListItem key={i}>{s}</ListItem>
          ))}
        </List>
      </Box>
      <Box mb='4'>
        <Heading size='lg' mb='2'>
          Education
        </Heading>
        <List>
          {post.education.map((s, i) => (
            <ListItem key={i}>{s}</ListItem>
          ))}
        </List>
      </Box>
      <Flex justifyContent='end'>
        <ButtonGroup>
          <Button colorScheme='green'>Apply Now</Button>
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
