import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Button,
} from '@chakra-ui/react';
import useFetch from 'react-fetch-hook';
import { useParams } from 'react-router-dom';

function CoverLetterDrawer({ isOpen, onClose, btnRef }) {
  const params = useParams();
  const { isLoading, post, error } = useFetch(
    `https://localhost:5000/cover-letter/${params.post_id}`,
  );

  return (
    <>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef} size='lg'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cover Letter</DrawerHeader>

          <DrawerBody>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugiat voluptas
              perspiciatis tempore amet dolorum nam eligendi, iure voluptatibus quia accusamus.
              Necessitatibus minima nesciunt earum iure sit? Repellendus, quo rem?
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus quos culpa
              atque molestias neque sint voluptate. Ab ex officia assumenda nostrum illo dignissimos
              tenetur iste? Ratione beatae modi quis?
            </Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='blue'>Copy to clipboard</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CoverLetterDrawer;
