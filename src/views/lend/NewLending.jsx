import React, { useEffect, useState } from "react";
import { Row, Col, Label, Media, Badge } from "reactstrap";
import { useParams } from "react-router-dom";
import TransactionTable from "../home/componet/TransactionTable";
import { LEANDING_COLLECTION } from "../../assets/data";
import ItemSummaryComponet from "../home/componet/ItemSummaryComponet";
import ImageSlideshow from "../home/componet/ImageSlideshow";
import ExtranalPartiesComponet from "../home/componet/ExtranalPartiesComponet";
import CustomerForm from "./componet/CustomerForm";
import SecurityForn from "./componet/SecurityForn";
import NewLendForm from "./componet/NewLendForm";
import InstallmentTable from "../home/componet/InstallmentTable";

export default function NewLending() {
  const [data, setData] = useState(LEANDING_COLLECTION[0]);
  const { lendId } = useParams();
  console.log(LEANDING_COLLECTION[0]);
  useEffect(() => {
    setData(LEANDING_COLLECTION[0]);
  }, []);

  return (
    <>
      <div className="container m-3">
        <Row>
          <Col>
            <h2 className="text-primary">Create New Lend </h2>
          </Col>
        </Row>
        <Row className="mt-3">
          <Row>
            <Col>
              <h5 className="text-primary">Customer Details </h5>
            </Col>
          </Row>
          <CustomerForm />
        </Row>

        <Row className="mt-5">
          <Row>
            <Col>
              <h5 className="text-primary">Security Details </h5>
            </Col>
          </Row>
          <SecurityForn />
        </Row>

        <Row className="mt-5">
          <Row>
            <Col>
              <h5 className="text-primary">Lend Details </h5>
            </Col>
          </Row>
          <NewLendForm />
        </Row>

        <Row className="mt-5">
          <Row>
            <h5> Installment Shedule</h5>
          </Row>
          <Row className="mt-3">
            <InstallmentTable data={data} />
          </Row>
        </Row>
      </div>
    </>
  );
}
