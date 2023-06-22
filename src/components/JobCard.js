import { Link } from 'react-router-dom';
import {
  ButtonGroup,
  CardFooter,
  CardBody,
  Heading,
  Button,
  HStack,
  Stack,
  Card,
  Box,
} from '@chakra-ui/react';

const JobCard = props => {
  return (
    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='filled' width='100%'>
      <Stack width='100%'>
        <CardBody>
          <HStack align='start' justify='space-between'>
            <Box>
              <Heading size='lg' mb='2' color='Highlight' as={Link} to='/jobs/1'>
                Data Engineer at Meta
              </Heading>
              <Heading size='sm' color='GrayText'>
                16 days ago
              </Heading>
            </Box>
            <Button colorScheme='green'>Apply Now</Button>
          </HStack>
        </CardBody>
        <CardFooter>
          <ButtonGroup colorScheme='orange' size='xs' variant='outline'>
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
