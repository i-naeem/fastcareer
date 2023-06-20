import { Box, Text, Heading, Image } from '@chakra-ui/react';
import CatImage from '../assets/cat.png';

const CallToAction = props => {
  return (
    <>
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
    </>
  );
};

export default CallToAction;
