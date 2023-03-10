import React, { Suspense, useEffect } from 'react'
import Loading from '../Loading'
import { useParams } from 'react-router-dom'

function Detail({ suppliersList }) {

  console.log(44444444444);

  let { id } = useParams()
  const detailObj = suppliersList.find(supplier => supplier.id === Number(id))

  return (
    detailObj ? (
      <div className="detail">
        <h2>{detailObj.companyName}</h2>
        <ul>
          <li><i>Contact title</i>: {detailObj.contactTitle}</li>
          <li><i>Contact name</i>: {detailObj.contactName}</li>
          <li><i>City</i>: {detailObj.address.city}</li>
        </ul>
      </div>
    ) : <h3>Loading...</h3>
  )
}

export default Detail