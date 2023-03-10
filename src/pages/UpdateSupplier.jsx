import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UpdateSupplier({ suppliersList }) {

    const [loop, setLoop] = useState(true)

    const { id } = useParams()
    const [formData, setFormData] = useState({
        companyName: '',
        contactName: '',
        contactTitle: '',
        address: ''
    })

    if (loop && suppliersList.length > 0) {
        setLoop(false)
        const obj = suppliersList.find(supplier => supplier.id === Number(id))
        setFormData(formData => ({ ...formData, ...obj }))
    }

    const changeHandle = (e) => {
        setFormData(formData => ({ ...formData, [e.target.name]: e.target.value }))
    }

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
                <TextField fullWidth value={formData.companyName} onChange={(e) => changeHandle(e)} label="Company name" variant="outlined" name='companyName' margin='dense' required />
                <TextField fullWidth value={formData.contactName} onChange={(e) => changeHandle(e)} label="Contact name" variant="outlined" name='contactName' margin='dense' required />
                <TextField fullWidth value={formData.contactTitle} onChange={(e) => changeHandle(e)} label="Contact title" variant="outlined" name='contactTitle' margin='dense' required />
                <TextField fullWidth value={formData.address.country} onChange={(e) => { setFormData(formData => ({ ...formData, address: { country: e.target.value } })) }} label="Country" variant="outlined" name='country' margin='dense' required />
                <hr />
                <Button type='submit' fullWidth variant="outlined" size='large'>UPDATE SUPPLIER</Button>
            </form>
        </section>
    )
}

export default UpdateSupplier