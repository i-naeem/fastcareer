import { Link } from 'react-router-dom';
import _ from 'lodash';
import {
  ButtonGroup,
  CardFooter,
  CardBody,
  Heading,
  Button,
  HStack,
  Stack,
  Card,
  Box,
} from '@chakra-ui/react';

const JobCard = ({ post }) => {
  return (
    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='filled' width='100%'>
      <Stack width='100%'>
        <CardBody>
          <HStack align='start' justify='space-between'>
            <Box>
              <Heading size='lg' mb='2' color='Highlight' as={Link} to={`/posts/${post.id}`}>
                {post.title} at {post.company}
              </Heading>
              <Heading size='sm' color='GrayText'>
                {post.deadline}
              </Heading>
            </Box>
            <Button colorScheme='green'>Apply Now</Button>
          </HStack>
        </CardBody>
        <CardFooter>
          <ButtonGroup colorScheme='orange' size='xs' variant='outline'>
            {_.sampleSize(post.categories, 4).map((c, i) => (
              <Button key={i}>{c}</Button>
            ))}
          </ButtonGroup>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default JobCard;
