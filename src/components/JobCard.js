import {
  Box,
  Card,
  Text,
  Stack,
  Button,
  HStack,
  Heading,
  CardBody,
  ButtonGroup,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const JobCard = ({ post }) => {
  return (
    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='filled' width='100%'>
      <Stack width='100%'>
        <CardBody>
          <HStack align='start' justify='space-between' pb='2'>
            <Box>
              <Heading size='lg' mb='2' color='Highlight' as={Link} to={`/posts/${post.id}`}>
                {post.title}
              </Heading>
              <Heading size='sm' color='GrayText'>
                {post.company}
              </Heading>
              <Text textAlign='justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem soluta sequi explicabo!
                Nobis eaque fuga aspernatur voluptate expedita illum non dolorem doloremque
                explicabo quis? Nihil, voluptates! Harum odit necessitatibus quis suscipit sunt,
                voluptatibus eaque dolorum soluta atque asperiores earum. Eveniet, eaque enim.
                Voluptates suscipit sunt libero, earum excepturi dolorem iusto sed labore a vero
                repellat laborum et deleniti consectetur asperiores eum corporis doloremque quas ea
                ipsam unde officiis, maiores quis fugit. Voluptas reprehenderit deleniti cumque
                blanditiis, nulla in dolorem dignissimos quia facere et numquam nemo debitis
                similique rerum dicta ducimus obcaecati nisi saepe ipsa? Delectus earum voluptatem
                libero ut molestias.
              </Text>
            </Box>
            <Box>
              <Button colorScheme='green'>Apply Now</Button>
            </Box>
          </HStack>

          <ButtonGroup colorScheme='orange' size='xs' variant='outline'>
            {_.sampleSize(post.categories, 4).map((c, i) => (
              <Button key={i}>{c}</Button>
            ))}
          </ButtonGroup>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default JobCard;
