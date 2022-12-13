import React from 'react'
import { Table, Button } from 'react-bootstrap';

const AdminReports = () => {
  return (
    <div
      style={{ marginTop: "200px " }}
      className="shadow-lg p-3 mb-5 bg-white rounded container"
    >
      <div style={{ textAlign: "left" }}>
        <Button
          href="/account"
          style={{ display: "inline-block" }}
          variant="info"
        >
          Go Back
        </Button>
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "2em",
          marginBottom: "20px",
        }}
      >
        <span style={{ display: "inline-block" }}>OU Applications</span>
      </div>

      <Table>
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone #</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default AdminReports