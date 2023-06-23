import { useRef } from 'react';
import JobCard from '../components/JobCard';
import CoverLetterDrawer from '../components/CoverLetterDrawer';
import {
  Box,
  Flex,
  List,
  Text,
  Button,
  Heading,
  ListItem,
  ButtonGroup,
  useDisclosure,
} from '@chakra-ui/react';

const Job = ({ isError, isLoading, posts }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef();
  const post = {
    id: 1,
    title: 'Data Engineer',
    company: 'Meta',
    skills: ['Python', 'Java', 'Github'],
    categories: ['Python', 'Java', 'Github'],
    education: ['Python', 'Java', 'Github'],
  };

  return (
    <Box>
      <Box mb='4'>
        <JobCard post={post} />
      </Box>
      <Box mb='4'>
        <Heading size='lg' mb='2'>
          About {post.company}
        </Heading>
        <Text fontSize='md'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad labore facilis
          expedita, fugit itaque explicabo laborum! In harum ut voluptate culpa nulla error quia!
          Impedit porro eveniet nemo ratione asperiores quidem perspiciatis molestiae eaque facilis
          atque dicta facere dolorum veniam, accusantium a magnam nihil odio id? Eaque minus ullam
          sit quasi. Odio totam delectus veniam, labore minima ut quod dolore commodi perferendis
          amet? Hic rerum possimus illo cumque, laborum quidem unde cupiditate, nihil impedit
          perferendis nam aspernatur quae maiores odio quas esse similique. Eveniet, velit natus
          animi a ea sequi perferendis illo delectus nisi illum nesciunt et maxime molestias?
        </Text>
      </Box>
      <Box mb='4'>
        <Heading size='lg' mb='2'>
          Job Description
        </Heading>
        <Text fontSize='md'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis soluta deserunt,
          reiciendis, fugiat dicta iste, quia quod doloremque incidunt earum quasi. Ducimus
          distinctio reprehenderit delectus qui consequuntur adipisci exercitationem voluptatem
          tempore nostrum iure quae perspiciatis sequi atque alias nisi quaerat, id blanditiis.
          Laboriosam quidem nobis animi. Quaerat quibusdam, expedita doloremque beatae sit illo quos
          saepe laudantium temporibus quidem molestias ad recusandae harum delectus rem debitis a
          obcaecati? Perferendis, animi?
        </Text>
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
