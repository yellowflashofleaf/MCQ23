import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
function Instruction() {
  const [open, setOpen] = useState(true);
  const handle = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal isOpen={open} onClose={handle}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            TEst
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handle}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Instruction;
