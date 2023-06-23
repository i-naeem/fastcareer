import { Box, Heading, List, ListItem } from '@chakra-ui/react';

const ListWrapper = props => {
  return (
    <Box mb='4'>
      <Heading size='lg' mb='2'>
        {props.heading}
      </Heading>
      <List>
        {props.items?.map((item, idx) => (
          <ListItem key={idx}>{item}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListWrapper;
