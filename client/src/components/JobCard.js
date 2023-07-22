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
  VStack,
} from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
import _ from 'lodash';
import { FaGlobeAfrica } from 'react-icons/fa';

const JobCard = ({ post, isJobPage }) => {
  const { colorMode } = useColorMode();

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant={isJobPage ? '' : 'outline'}
      borderColor={colorMode === 'light' && !isJobPage ? 'ActiveBorder' : ''}
      backgroundColor={colorMode === 'light' && !isJobPage ? 'gray.200' : ''}
      width='100%'
    >
      <Stack width='100%'>
        <CardBody>
          <HStack align='start' justify='space-between' pb='2'>
            <Box>
              <Link as={RLink} to={`/posts/${post.id}`}>
                <Heading size='lg' mb='3'>
                  {post.title} at {post.company}
                </Heading>
              </Link>
              <Heading mb='3' size='md' color='GrayText'>
                {post.location}
              </Heading>

              {isJobPage ? (
                ''
              ) : (
                <Text textAlign='justify' maxW='80ch' color='GrayText'>
                  {post.excerpt.replace(/_|-|:/gi, '')}
                </Text>
              )}
            </Box>
            {isJobPage ? (
              ''
            ) : (
              <Box>
                <Button colorScheme='green' as={Link} target='_blank' href={post.source}>
                  Apply Now
                </Button>
              </Box>
            )}
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
