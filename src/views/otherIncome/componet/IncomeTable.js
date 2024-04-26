import React from "react";
import { Table } from "reactstrap";

export default function IncomeTable({ data }) {
  return (
    <>
      <Table className="align-items-center table-flush" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Income ID</th>
            <th scope="col">Income Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Note</th>
          </tr>
        </thead>
        <tbody>
          {data.map((lending, key) => (
            <tr key={key}>
              <td>{lending.date}</td>
              <td>{lending.incomeId}</td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">{lending.type}</span>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">{lending.amount}</span>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">{lending.note}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
