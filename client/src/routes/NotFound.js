import { Flex, Heading, Button, Text, Stack, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = props => {
  return (
    <>
      <Flex p='3' as='section' minHeight='600px' align='center' justify='center'>
        <Stack align='center'>
          <Box mb='3' align='center'>
            <Heading fontSize='180px' lineHeight={1} color='ActiveBorder'>
              404
            </Heading>
            <Heading>PAGE NOT FOUND</Heading>
            <Text maxW='70ch'>
              The page you are looking for might have been removed, had changed its name or is
              temporarily unavailable.
            </Text>
          </Box>
          <Button leftIcon={<FaArrowLeft />} colorScheme='gray' as={Link} to='/'>
            Go to back to home page
          </Button>
        </Stack>
      </Flex>
    </>
  );
};

export default NotFound;
