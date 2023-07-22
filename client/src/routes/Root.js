import { Container, Heading } from '@chakra-ui/react';

export default function Root(props) {
  return (
    <Container maxW='container.xl'>
      <header>
        <Heading>FastCareer</Heading>
      </header>
      <main></main>
      <footer></footer>
    </Container>
  );
}
