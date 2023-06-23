import {
  Box,
  Link,
  Card,
  Text,
  Stack,
  Button,
  HStack,
  Heading,
  CardBody,
  ButtonGroup,
  useColorMode,
} from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
import _ from 'lodash';

const JobCard = ({ post }) => {
  const { colorMode } = useColorMode();

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      borderColor={colorMode === 'light' ? 'ActiveBorder' : ''}
      backgroundColor={colorMode === 'light' ? 'gray.200' : ''}
      width='100%'
    >
      <Stack width='100%'>
        <CardBody>
          <HStack align='start' justify='space-between' pb='2'>
            <Box>
              <Link as={RLink} to={`/posts/${post.jid}`}>
                <Heading size='lg' mb='3'>
                  {post.title} at {post.company}
                </Heading>
              </Link>

              <Text textAlign='justify' maxW='80ch' color='GrayText'>
                {post.description}
              </Text>
            </Box>
            <Box>
              <Button colorScheme='green'>Apply Now</Button>
            </Box>
          </HStack>

          <ButtonGroup colorScheme='orange' size='xs' variant='outline'>
            {_.sampleSize(post.skills, 4).map((c, i) => (
              <Button key={i}>{c}</Button>
            ))}
          </ButtonGroup>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default JobCard;
