import React from 'react'
import { Table, Button } from 'react-bootstrap';

const AdminNewItems = () => {
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
        <span style={{ display: "inline-block" }}>New Items</span>
      </div>

      <Table>
        <thead>
          <tr>
            <th>Seller</th>
            <th>Title</th>
            <th>Image</th>
            <th>Keyword</th>
            <th>Starting Bid</th>
            <th>Buy Now Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
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

export default AdminNewItems