import { useMediaQuery, Container, Heading, HStack, Button, Link, Box } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { APP_NAME } from '../constants';

const Header = props => {
  const [isLargerThan600] = useMediaQuery(`(min-width: 600px)`);

  const size = isLargerThan600 ? 'md' : 'xs';
  return (
    <Box>
      <Box p={2} d='flex' as='header' shadow='sm' height={70} alignItems='center'>
        <Container maxW='container.xl'>
          <HStack justifyContent='space-between'>
            <Heading
              bgGradient='linear(to-r, teal.500, green.500)'
              size={isLargerThan600 ? 'md' : 'sm'}
              bgClip='text'
              as={Link}
              href='/'
            >
              {APP_NAME}
            </Heading>

            <HStack spacing={2}>
              <Button size={size} to='/' as={Link}>
                Home
              </Button>

              <ColorModeSwitcher justifySelf='flex-end' size={size} />
            </HStack>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
