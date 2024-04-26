import React from "react";
import { Table } from "reactstrap";

export default function InstallmentTable({ data }) {
  return (
    <>
      {data && data.transaction.length > 0 ? (
        <Table className="align-items-center table-flush" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Installment</th>
            </tr>
          </thead>
          <tbody>
            {data.transaction.map((lending, key) => (
              <tr key={key}>
                <td>{lending.date}</td>
                <td>{data.installement}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        "Loading"
      )}
    </>
  );
}
