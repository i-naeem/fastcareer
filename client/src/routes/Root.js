import {
  Box,
  Flex,
  Text,
  Image,
  Input,
  Button,
  HStack,
  Heading,
  Container,
  InputGroup,
  Card,
  SimpleGrid,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';
import CatImage from '../assets/cat.png';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';

export default function Root(props) {
  return (
    <Container maxW='container.xl'>
      <Box as='header' p='4'>
        <Flex>
          <Heading me='auto'>FastCareer</Heading>
          <Button>Home</Button>
          <ColorModeSwitcher />
        </Flex>
      </Box>

      <main>
        <Box mb='2'>
          <HStack justify='space-between'>
            <Box>
              <Heading size='3xl' mb='3'>
                Ready for a <br /> career change?
              </Heading>
              <Heading size='xl'>
                Let us{' '}
                <Text as='span' color='red.400'>
                  find
                </Text>{' '}
                one for you
              </Heading>
            </Box>
            <Box>
              <Image alt='A cat with laptop for decoration' src={CatImage} maxBlockSize='300' />
            </Box>
          </HStack>
        </Box>
        <Box as='form' mb='2'>
          <InputGroup gap='1'>
            <Input placeholder='Search your dream job' rounded='none' name='q' type='search' />
            <Button rounded='none' type='submit'>
              Search
            </Button>
          </InputGroup>
        </Box>

        <SimpleGrid spacing={2}>
          <Card maxW='300px' size='sm'>
            <CardBody>
              <Heading size='md' mb='2'>
                Web Developer
              </Heading>
              <Text size='sm'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, in?
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme='green' size='xs'>
                Apply Now
              </Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </main>

      <footer></footer>
    </Container>
  );
}
