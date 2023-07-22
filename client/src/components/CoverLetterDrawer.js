import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Text,
  useClipboard,
} from '@chakra-ui/react';
import _ from 'lodash';
import { LETTERS } from './letters';
import { useEffect, useState } from 'react';

function CoverLetterDrawer({ isOpen, onClose, btnRef }) {
  const { hasCopied, onCopy, value, setValue } = useClipboard('');

  useEffect(() => {
    const letter = _.sample(LETTERS);
    setValue(letter);
  }, []);
  return (
    <>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef} size='lg'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cover Letter</DrawerHeader>

          <DrawerBody>
            <Text as='pre' wordBreak='break-word' whiteSpace='pre-wrap'>
              {value}
            </Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={onCopy}>{hasCopied ? 'Copied!' : 'Copy to clipboard'}</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CoverLetterDrawer;
