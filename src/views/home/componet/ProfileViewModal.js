import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label,
  Media,
} from "reactstrap";
import UserLendImage from "../../../assets/img/user-lend.jpg";

// import UpdateInvestigatorForm from "./UpdateInvestigatorForm";

export default function ProfileViewModal({ lending }) {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    if (success) window.location.reload();
  };
  return (
    <>
      <Col>
        <Button className="w-100" onClick={toggle}>
          View
        </Button>
      </Col>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop={true}
        size="lg"
      >
        <ModalHeader toggle={toggle}>Creditor Profile</ModalHeader>
        <ModalBody>
          <Row className="mt-2">
            <Col lg={1} />
            <Col lg={8} className="mx-h-auto my-auto">
              <Row>
                <Col lg={3}>
                  <Label>Name : </Label>
                </Col>
                <Col>
                  <Label>{lending.creditor.name}</Label>
                </Col>
              </Row>

              <Row>
                <Col lg={3}>
                  <Label>National ID : </Label>
                </Col>
                <Col>
                  <Label>{lending.creditor.nic}</Label>
                </Col>
              </Row>

              <Row>
                <Col lg={3}>
                  <Label>Address : </Label>
                </Col>
                <Col>
                  <Label>{lending.creditor.address}</Label>
                </Col>
              </Row>
              <Row>
                <Col lg={3}>
                  <Label>Mobile : </Label>
                </Col>
                <Col>
                  <Label>{lending.creditor.mobile}</Label>
                </Col>
              </Row>
              <Row>
                <Col lg={3}>
                  <Label>Home : </Label>
                </Col>
                <Col>
                  <Label>{lending.creditor.home}</Label>
                </Col>
              </Row>
            </Col>
            <Col>
              <Media className="align-items-center justify-content-center">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="..." src={UserLendImage} className="w-100" />
                </a>
              </Media>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
}
