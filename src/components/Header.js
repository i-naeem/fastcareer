import { useMediaQuery, Container, Heading, HStack, Button, Link, Box } from '@chakra-ui/react';

const Header = props => {
  const [isLargerThan600] = useMediaQuery(`(min-width: 600px)`);

  const size = isLargerThan600 ? 'md' : 'xs';
  return (
    <Box>
      <Box p={2} d='flex' as='header' shadow='sm' height={70} alignItems='center'>
        <Container maxW='container.xl'>
          <HStack justifyContent='space-between'>
            <Heading
              as={Link}
              bgClip='text'
              href='/'
              size={isLargerThan600 ? 'xl' : 'md'}
              bgGradient='linear(to-r, teal.500, green.500)'
            >
              Aipply
            </Heading>

            <HStack spacing={2}>
              <Button size={size} to='/' as={Link}>
                Home
              </Button>
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
