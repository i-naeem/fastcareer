import {
  ButtonGroup,
  CardFooter,
  CardBody,
  Heading,
  Button,
  Stack,
  Card,
  Box,
  HStack,
} from '@chakra-ui/react';

const JobCard = props => {
  return (
    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='filled' width='100%'>
      <Stack width='100%'>
        <CardBody>
          <HStack align='center' justify='space-between'>
            <Box>
              <Heading size='lg' mb='2' color='Highlight'>
                Data Engineer at Meta
              </Heading>
              <Heading size='sm' color='GrayText'>
                16 days ago
              </Heading>
            </Box>
            <Box>
              <Button colorScheme='green'>Apply Now</Button>
            </Box>
          </HStack>
        </CardBody>
        <CardFooter>
          <ButtonGroup colorScheme='orange' size='sm' variant='outline'>
            <Button>Data Science</Button>
            <Button>Web Scrapping</Button>
            <Button>NLP</Button>
          </ButtonGroup>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default JobCard;
