import React from "react";
import {
  Badge,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  Table,
  UncontrolledTooltip,
} from "reactstrap";
import ViewModal from "./ViewModal";
import UpdateModal from "./UpdateModal";

export default function LendingTable({ data }) {
  return (
    <>
      <Table className="align-items-center table-flush" responsive>
        <thead className="thead-light">
          <tr>
            <th scope="col" />
            <th scope="col">Date</th>
            <th scope="col">Job ID</th>
            <th scope="col">Status</th>
            <th scope="col">Amount</th>
            <th scope="col">Return</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {data.map((lending, key) => (
            <tr key={key}>
              <th scope="row" style={{ width: 60 }}>
                <Media className="align-items-center">
                  <img
                    alt="..."
                    src={require("../../../assets/img/j1.jpg")}
                    className="rounded-circle"
                    height={50}
                    width={50}
                  />
                </Media>
              </th>
              <td>{lending.lend_date}</td>
              <td>{lending.jobId}</td>
              <td>
                {lending.status === "Open" ? (
                  <Badge color="info" className="badge-dot mr-4">
                    <i className="bg-warning" />
                    Open
                  </Badge>
                ) : lending.status === "Closed" ? (
                  <Badge color="success" className="badge-dot mr-4">
                    <i className="bg-warning" />
                    Closed
                  </Badge>
                ) : lending.status === "Procrssing" ? (
                  <Badge color="warning" className="badge-dot mr-4">
                    <i className="bg-warning" />
                    Procrssing
                  </Badge>
                ) : null}
              </td>

              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">{lending.amount}</span>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="mr-2">{lending.returnTotal}</span>
                </div>
              </td>
              <td className="text-right">
                <ViewModal data={lending} /> <UpdateModal data={lending} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
