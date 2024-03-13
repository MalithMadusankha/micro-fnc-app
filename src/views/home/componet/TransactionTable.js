import React from "react";
import { Table } from "reactstrap";

export default function TransactionTable({ data }) {
  return (
    <>
      <Table className="align-items-center table-flush" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Installment</th>
            <th scope="col">Payment</th>
            <th scope="col">Blance</th>
          </tr>
        </thead>
        <tbody>
          {data.transaction.map((lending, key) => (
            <tr key={key}>
              <td>{lending.date}</td>
              <td>{data.installement}</td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">{lending.retun}</span>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  {data.installement - lending.retun > 0 ? (
                    <span className="mr-2 text-danger">
                      {lending.retun - data.installement}
                    </span>
                  ) : (
                    <span className="mr-2 text-success">
                      {lending.retun - data.installement}
                    </span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
