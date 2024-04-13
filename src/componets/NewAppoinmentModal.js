import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import ReLendForm from "./NewAppoinmentForm";

// import UpdateInvestigatorForm from "./UpdateInvestigatorForm";

export default function NewAppoinmentModal({ lending }) {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    if (success) window.location.reload();
  };

  return (
    <>
      <Button
        color="warning"
        size="sm"
        className="w-100 text-white"
        onClick={toggle}
      >
        New Appoinment
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop={true}
        size="lg"
      >
        <ModalHeader className="text-primary" toggle={toggle}>
          Add New Appoinment
        </ModalHeader>
        <ModalBody>
          <ReLendForm toggle={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
}
