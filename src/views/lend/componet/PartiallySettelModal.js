import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import ReLendForm from "./ReLendForm";
import PartiallySettelForm from "./PartiallySettelForm";

// import UpdateInvestigatorForm from "./UpdateInvestigatorForm";

export default function PartiallySettelModal({ lending }) {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    if (success) window.location.reload();
  };

  return (
    <>
      <Button color="warning" size="sm" onClick={toggle}>
        Partially Settel
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop={true}
        size="lg"
      >
        <ModalHeader className="text-primary" toggle={toggle}>
          Partially Settel
        </ModalHeader>
        <ModalBody>
          <PartiallySettelForm />
        </ModalBody>
      </Modal>
    </>
  );
}
