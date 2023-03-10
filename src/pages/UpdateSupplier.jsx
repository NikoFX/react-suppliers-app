import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UpdateSupplier({ suppliersList, fetchStatus }) {

    const { id } = useParams()
    // const [formData, setFormData] = useState({
    //     companyName: '',
    //     contactName: '',
    //     contactTitle: '',
    //     address: { country: '' }
    // })

    // useEffect(() => {
    //     const obj = suppliersList.find(supplier=>supplier.id===Number(id))
    //     setFormData(formData=>({...formData, obj}))
    // }, [fetchStatus])

    const onSubmit = (e) => {
        e.preventDefault()
        fetch('https://northwind.vercel.app/api/suppliers/' + id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                companyName: e.target.companyName.value,
                contactName: e.target.contactName.value,
                contactTitle: e.target.contactTitle.value,
                address: { country: e.target.country.value }
            })
        })
            .finally(() => window.location.assign('/home'))
    }

    return (
        <section className="add">
            <h1 className='add-supplier-h1'>Update supplier</h1>
            <form className='form' onSubmit={(e) => onSubmit(e)}>
                <TextField fullWidth label="Company name" variant="outlined" name='companyName' margin='dense' required />
                <TextField fullWidth label="Contact name" variant="outlined" name='contactName' margin='dense' required />
                <TextField fullWidth label="Contact title" variant="outlined" name='contactTitle' margin='dense' required />
                <TextField fullWidth label="Country" variant="outlined" name='country' margin='dense' required />
                <hr />
                <Button type='submit' fullWidth variant="outlined" size='large'>ADD SUPPLIER</Button>
            </form>
        </section>
    )
}

export default UpdateSupplier