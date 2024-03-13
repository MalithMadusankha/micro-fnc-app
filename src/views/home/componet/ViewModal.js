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
  Badge,
} from "reactstrap";
import TransactionTable from "./TransactionTable";

// import UpdateInvestigatorForm from "./UpdateInvestigatorForm";

export default function ViewModal({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    if (success) window.location.reload();
  };

  return (
    <>
      <Button color="primary" size="sm" onClick={toggle}>
        View
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop={true}
        size="lg"
      >
        <ModalHeader toggle={toggle}>Lending Profile</ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <Row>
                <Col>
                  <Label>Item Name : </Label>
                </Col>
                <Col>
                  <Label>{data.name}</Label>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Label>Lend Type : </Label>
                </Col>
                <Col>
                  <Label>{data.type}</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label>Item Date : </Label>
                </Col>
                <Col>
                  <Label>{data.lend_date}</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label>Expire Date : </Label>
                </Col>
                <Col>
                  <Label>{data.close_date}</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label>Rate : </Label>
                </Col>
                <Col>
                  <Label>{data.rate}%</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label>Leand Amount : </Label>
                </Col>
                <Col>
                  <Label className="fs-5">{data.amount}</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label>Total Return : </Label>
                </Col>
                <Col>
                  <Label className="fs-5">{data.returnTotal}</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label>Status : </Label>
                </Col>
                <Col>
                  {data.status === "Open" ? (
                    <Badge color="info" className="badge-dot mr-4">
                      <i className="bg-warning" />
                      Open
                    </Badge>
                  ) : data.status === "Closed" ? (
                    <Badge color="success" className="badge-dot mr-4">
                      <i className="bg-warning" />
                      Closed
                    </Badge>
                  ) : data.status === "Procrssing" ? (
                    <Badge color="warning" className="badge-dot mr-4">
                      <i className="bg-warning" />
                      Procrssing
                    </Badge>
                  ) : null}
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
                  <img
                    alt="..."
                    src={require("../../../assets/img/j1.jpg")}
                    height={230}
                    width={230}
                  />
                </a>

                <img
                  alt="..."
                  src={require("../../../assets/img/j2.jpg")}
                  height={230}
                  width={230}
                />
              </Media>
            </Col>
          </Row>
          <Row className="mt-3">
            <Row>
              <h5> Transaction History</h5>
            </Row>
            <Row className="mt-2">
              <TransactionTable data={data} />
            </Row>
          </Row>

          <Row className="mt-3">
            <h5> Creditor Details</h5>
          </Row>

          <Row className="mt-2">
            <Col className="">
              <Row>
                <Col>
                  <Label>Name : </Label>
                </Col>
                <Col>
                  <Label>{data.creditor.name}</Label>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Label>National ID : </Label>
                </Col>
                <Col>
                  <Label>{data.creditor.nic}</Label>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Label>Address : </Label>
                </Col>
                <Col>
                  <Label>{data.creditor.address}</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label>Mobile : </Label>
                </Col>
                <Col>
                  <Label>{data.creditor.mobile}</Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label>Home : </Label>
                </Col>
                <Col>
                  <Label>{data.creditor.home}</Label>
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
                  <img
                    alt="..."
                    src={require("../../../assets/img/usgg.jpg")}
                    height={230}
                    width={230}
                  />
                </a>
              </Media>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
}
