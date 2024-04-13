import React from "react";
import { Badge, Col, Media, Row, Table } from "reactstrap";
import { Link } from "react-router-dom";
import ReLendModal from "../../lend/componet/ReLendModal";

export default function CollectionTable({ data }) {
  return (
    <>
      <Row className="">
        <Col lg={12}>
          <h6 className="text-right me-3 text-danger"> Short : 500</h6>
        </Col>
      </Row>
      <Table className="align-items-center table-flush" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Collection ID</th>
            <th scope="col">Customer</th>
            <th scope="col">Product</th>
            <th scope="col">Amount</th>
            <th scope="col">Return</th>
          </tr>
        </thead>
        <tbody>
          {data.map((lending, key) => (
            <tr key={key}>
              <td>{lending.date}</td>
              <td>{lending.collectionId}</td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">{lending.customer}</span>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">{lending.product}</span>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">{lending.amount}</span>
                </div>
              </td>
              <td>
                {lending.amount === lending.return ? (
                  <Badge color="success" className="badge-dot w-100">
                    <h6 className="p-0 m-0">{lending.return}</h6>
                  </Badge>
                ) : lending.amount > lending.return ? (
                  <Badge color="danger" className="badge-dot w-100">
                    <h6 className="p-0 m-0">{lending.return}</h6>
                  </Badge>
                ) : lending.amount < lending.return ? (
                  <Badge color="info" className="badge-dot w-100">
                    <h6 className="p-0 m-0">{lending.return}</h6>
                  </Badge>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
