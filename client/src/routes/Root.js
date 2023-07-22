import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { Box, Button, Container, Flex, Heading } from '@chakra-ui/react';

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
      <main></main>
      <footer></footer>
    </Container>
  );
}
