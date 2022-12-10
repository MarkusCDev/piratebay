import React, { useState, useEffect } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useRef } from "react";
import { Button } from "react-bootstrap";


const Banking = () => {
  const Deposit = () => { }
  const [counter, setCounter] = useState(0)
  const { user, logOut } = useUserAuth();
  const [inputDepositRef, setDepositRef] = useState(0)
  const [inputWithdrawRef, setWithdrawRef] = useState(0)
  const handleClick1 = async () => {
    var x = parseInt(inputDepositRef, 10)
    var y = userdata?.money + x
    console.log(y)
    console.log(typeof (userdata?.money))
    console.log(typeof (x))
    let z = 100
    const docRef = doc(db, "Users", user.email)
    await updateDoc(docRef, {
      money: y
    });

    window.location.reload(true)
  }

  const handleClick2 = async () => {
    var x = parseInt(inputWithdrawRef, 10)

    if (x > userdata?.money) {
      var y = userdata?.money
    }
    else {
      var y = userdata?.money - x
    }

    const docRef = doc(db, "Users", user.email)
    await updateDoc(docRef, {
      money: y
    });
    window.location.reload(true)
  }

  const [userdata, setUserData] = useState(null);
  const retdata = async () => {
    const docRef = doc(db, "Users", user.email)
    const docSnap = await getDoc(docRef)
    setUserData(docSnap.data())
  }
  useEffect(() => {
    retdata();
  }, [user])

  return (
    <div style={{ marginTop: '100px', width:'700px' }} className="shadow-lg p-3 mb-5 bg-white rounded container">  
      <div></div>
      <div><h2 className="text-center">Banking</h2></div> 
      <div style={{ marginTop: '30px ' }}>
        <h3 className="text-center">Balance: ${userdata?.money}</h3>
      </div>
      <div>
        <h3 className="text-center">Current Card: Visa 4893</h3>
      </div>
      <div className="mr-3" style={{ 'text-align': 'center', marginTop: '50px',  height: '50px'}}>      
        <b style={{ marginRight: '30px ' }}>Deposit</b>
        <input value={inputDepositRef}
          type="number"
          placeholder="Input deposit"
          onChange={(e) => setDepositRef(e.target.value)} />
        <Button style={{'text-align': 'center', marginLeft: '50px', width: '70px', height: '25px' }} className="btn btn-success" onClick={handleClick1}><b>+</b></Button>
      </div>
      <div className="mr-3" style={{'text-align': 'center'}}>      
        <b style={{ marginRight: '30px ' }}>Withdraw</b>
        <input value={inputWithdrawRef}
          type="number"
          placeholder="Input withdraw"
          onChange={(e) => setWithdrawRef(e.target.value)} />
        <Button style={{ 'text-align': 'center', marginLeft: '50px', width: '70px', height: '25px' }} className="btn btn-danger" onClick={handleClick2}><b>-</b></Button>
      </div>
    </div>
    

    

  )
}
export default Banking


// export default depositwithdraw
// import React from 'react'

// export const depositwithdraw = () => {
//   return (
//     <div>depositwithdraw</div>
//   )
// }
// export default depositwithdraw