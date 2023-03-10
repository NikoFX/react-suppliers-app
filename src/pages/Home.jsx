import React, { useEffect, useState } from 'react'
import { useSnackbar } from 'notistack';

function Home({ suppliersList, setSuppliersLiset }) {

    const { enqueueSnackbar } = useSnackbar();

    const tableClick = (id) => {
        window.location.assign('/detail/' + id)
    }

    const tableDelete = (e, id) => {
        e.stopPropagation()
        fetch('https://northwind.vercel.app/api/suppliers/' + id, {
            method: 'DELETE'
        })
            .then(() => {
                setSuppliersLiset(suppliersList.filter(s => s.id !== id))
                enqueueSnackbar('Supplier deleted!', { variant: 'success' })
            })
    }

    const tableUpdate = (e, id) => {
        e.stopPropagation()
        window.location.assign('/update/' + id)
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Contact Name</th>
                        <th>Contact Title</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliersList ? suppliersList.map((supplier) => (
                        <tr className='tr' onClick={(e) => tableClick(supplier.id)} key={supplier?.id}>
                            <td>{supplier?.companyName}</td>
                            <td>{supplier?.contactName}</td>
                            <td>{supplier?.contactTitle}</td>
                            <td>{supplier?.address?.city}</td>
                            <td><div className="action"><button className='red-btn' onClick={(e) => tableDelete(e, supplier.id)}>Delete</button><button className='simple-btn' onClick={(e) => tableUpdate(e, supplier.id)}>Update</button></div></td>
                        </tr>
                    )) : null}
                </tbody>
            </table>
        </>
    )
}

export default Home