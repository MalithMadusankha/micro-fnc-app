import React, { useEffect, useState } from "react";
import { Row, Col, Label, Card, Badge, CardBody, Button } from "reactstrap";
import { useParams } from "react-router-dom";
import TransactionTable from "../home/componet/TransactionTable";
import { LEANDING_COLLECTION } from "../../assets/data";
import ItemSummaryComponet from "../home/componet/ItemSummaryComponet";
import ImageSlideshow from "../home/componet/ImageSlideshow";
import ExtranalPartiesComponet from "../home/componet/ExtranalPartiesComponet";
import NewCollectionModal from "../collection/componet/NewCollectionModal";
import ReLendModal from "./componet/ReLendModal";
import PartiallySettelModal from "./componet/PartiallySettelModal";
import RecoverSecurityModal from "./componet/RecoverSecurityModal";

export default function LendingItem() {
  const [data, setData] = useState({});
  const { lendId } = useParams();
  console.log(LEANDING_COLLECTION[0]);
  console.log(data && Object.keys(data).length);
  useEffect(() => {
    setData(LEANDING_COLLECTION[0]);
  }, []);

  return (
    <>
      {data && Object.keys(data).length > 0 ? (
        <div className="container m-3">
          <div className="d-flex justify-content-between mb-3">
            <div className="d-flex flex-row">
              <Card className="shadow me-2">
                <CardBody className="px-4">
                  <h5 className="text-center text-primary py-0 my-0"> 1652</h5>
                  <p className="text-center text-primary py-0 my-0">Lend ID</p>
                </CardBody>
              </Card>
              <Card className="shadow me-2">
                <CardBody className="px-4">
                  <h5 className="text-center text-primary py-0 my-0"> Open</h5>
                  <p className="text-center text-primary py-0 my-0">Status</p>
                </CardBody>
              </Card>
              <Card className="shadow me-2">
                <CardBody className="px-4">
                  <h5 className="text-center text-primary py-0 my-0"> Daily</h5>
                  <p className="text-center text-primary py-0 my-0">Type</p>
                </CardBody>
              </Card>
            </div>
            <div className="d-flex flex-row">
              <div>
                <NewCollectionModal />
              </div>
              <div>
                <ReLendModal />
              </div>
              <div className="mx-3">
                <PartiallySettelModal />
              </div>
              <div className="">
                <RecoverSecurityModal />
              </div>
            </div>
          </div>
          <Row>
            <Col>
              <h2 className="text-primary"> Security Details</h2>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={5} className="my-auto">
              <Row>
                <Col>
                  <Label>Lend ID Name : </Label>
                </Col>
                <Col>
                  <Label>LED0001</Label>
                </Col>
              </Row>
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
              {/* <Row>
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
              </Row> */}
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
            {/* Gallery */}

            <Col className="me-1">
              <ImageSlideshow />
            </Col>
          </Row>
          {/* Summery */}
          <Row className="mt-5">
            <ItemSummaryComponet />
          </Row>

          <Row className="mt-5">
            <Row>
              <h5> Transaction History</h5>
            </Row>
            <Row className="mt-3">
              <TransactionTable data={data} />
            </Row>
          </Row>

          {/* Extranal Parties */}
          <div className="mt-5">
            <ExtranalPartiesComponet />
          </div>
        </div>
      ) : null}
    </>
  );
}
