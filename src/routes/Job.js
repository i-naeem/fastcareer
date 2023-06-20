import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';
import JobCard from '../components/JobCard';

const Job = props => {
  const data = {
    id: 1,
    company: 'Meta',
    deadline: '25 July 2023',
    description: 'lorem*10',
    tags: ['Hybrid', 'Hong Kong', 'Productivity'],
  };
  return (
    <Box>
      <Box mb='4'>
        <JobCard />
      </Box>
      <Box mb='4'>
        <Heading size='lg' mb='2'>
          About Company
        </Heading>
        <Text fontSize='md'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius voluptas facere
          vel assumenda eveniet possimus exercitationem quae recusandae natus, quibusdam, earum
          necessitatibus unde tempora voluptatem temporibus nobis deserunt! Accusamus ut atque sed
          veniam dicta quae amet ad, quod vitae facere deleniti molestias sint! Distinctio nobis
          provident adipisci? Expedita harum tempore sunt quos, beatae dolor nobis, velit autem eum
          voluptas molestiae laborum aspernatur odit ipsa totam nostrum fuga ratione quod similique.
          Ad hic molestias quis error fugiat ea similique harum deserunt? Nulla facere qui quasi quo
          quod accusantium expedita vel repudiandae, perspiciatis voluptatum facilis dolor enim
          incidunt aliquid rerum cumque.
        </Text>
      </Box>
      <Box mb='4'>
        <Heading size='lg' mb='2'>
          Job Description
        </Heading>
        <Text fontSize='md'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eius voluptas facere
          vel assumenda eveniet possimus exercitationem quae recusandae natus, quibusdam, earum
          necessitatibus unde tempora voluptatem temporibus nobis deserunt! Accusamus ut atque sed
          veniam dicta quae amet ad, quod vitae facere deleniti molestias sint! Distinctio nobis
          provident adipisci? Expedita harum tempore sunt quos, beatae dolor nobis, velit autem eum
          voluptas molestiae laborum aspernatur odit ipsa totam nostrum fuga ratione quod similique.
          Ad hic molestias quis error fugiat ea similique harum deserunt? Nulla facere qui quasi quo
          quod accusantium expedita vel repudiandae, perspiciatis voluptatum facilis dolor enim
          incidunt aliquid rerum cumque.
        </Text>
      </Box>
    </Box>
  );
};

export default Job;
