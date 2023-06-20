import {
  ButtonGroup,
  CardFooter,
  CardBody,
  Heading,
  Button,
  Stack,
  Card,
  Text,
  Link,
} from '@chakra-ui/react';

const JobCard = props => {
  return (
    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='filled' width='100%'>
      <Stack>
        <CardBody>
          <Heading size='lg' as={Link}>
            The perfect latte
          </Heading>
          <Text py='2'>
            Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
          </Text>
        </CardBody>

        <CardFooter>
          <ButtonGroup size='sm' variant='outline'>
            <Button>Buy Latte</Button>
            <Button>Buy Latte</Button>
            <Button>Buy Latte</Button>
            <Button>Buy Latte</Button>
          </ButtonGroup>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default JobCard;
