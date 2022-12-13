import React, {useEffect, useState} from 'react'
import { Table, Button } from 'react-bootstrap';
import { db } from '../firebase-config';
import { doc, query, orderBy, getDocs, collection } from '@firebase/firestore';
import { useUserAuth } from '../context/UserAuthContext';



const AdminReports = () => {
  
  
   const { user } = useUserAuth();
   const [userdata, setUserData] = useState([]);

   const retdata3 = async () => {
     const collectionRef = collection(db, "AdminReports");
     const q = query(collectionRef, orderBy("timestamp", "asc"));
     const snapshot = await getDocs(q);
     setUserData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   };
  
      useEffect(() => {
        retdata3();
      }, []);
  
  
  
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
            <th>Item Id</th>
            <th>Reason</th>
            <th>Report</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.reason}</td>
              <td>{user.report}</td>
              <td>{user.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminReports