import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import ReLendForm from "./ReLendForm";

// import UpdateInvestigatorForm from "./UpdateInvestigatorForm";

export default function ReLendModal({ lending }) {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    if (success) window.location.reload();
  };

  return (
    <>
      <Button color="warning" size="sm" onClick={toggle}>
        Relend
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop={true}
        size="lg"
      >
        <ModalHeader className="text-primary" toggle={toggle}>
          Relend
        </ModalHeader>
        <ModalBody>
          <ReLendForm />
        </ModalBody>
      </Modal>
    </>
  );
}
