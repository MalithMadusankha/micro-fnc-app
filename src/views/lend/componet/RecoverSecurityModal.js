import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import ReLendForm from "./ReLendForm";
import RecoverSecurityForm from "./RecoverSecurityForm";

// import UpdateInvestigatorForm from "./UpdateInvestigatorForm";

export default function RecoverSecurityModal({ lending }) {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    if (success) window.location.reload();
  };

  return (
    <>
      <Button color="warning" size="sm" onClick={toggle}>
        Recover Security
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop={true}
        size="lg"
      >
        <ModalHeader className="text-primary" toggle={toggle}>
          Recover Security
        </ModalHeader>
        <ModalBody>
          <RecoverSecurityForm />
        </ModalBody>
      </Modal>
    </>
  );
}
