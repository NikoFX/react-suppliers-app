import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, Navigate } from 'react-router-dom'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import Add from './pages/Add'
import Detail from './pages/Detail'
import './index.css'
import UpdateSupplier from './pages/UpdateSupplier'


function App() {

  const [suppliersList, setSuppliersLiset] = useState([])
  const [fetchStatus, setFetchStatus] = useState(false)

  useEffect(() => {
    setFetchStatus(false)
    fetch('https://northwind.vercel.app/api/suppliers')
      .then(res => res.json())
      .then(data => {
        setSuppliersLiset(data)
      })
      .finally(() => setFetchStatus(true))
  }, [fetchStatus])

  return (
    <div className="container">
      <Header />
      <div className="main">
        <Routes>
          <Route path='' element={<Navigate to='home' />} />
          <Route path='home' element={<Home suppliersList={suppliersList} setFetchStatus={setFetchStatus} />} />
          <Route path='add' element={<Add />} />
          <Route path='detail/:id' element={<Detail suppliersList={suppliersList} />} />
          <Route path='update/:id' element={<UpdateSupplier suppliersList={suppliersList} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App