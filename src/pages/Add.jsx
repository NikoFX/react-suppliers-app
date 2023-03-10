import { Button, TextField } from '@mui/material'
import React from 'react'

function Add() {



    const add = (e) => {
        e.preventDefault()
        fetch('https://northwind.vercel.app/api/suppliers/', {
            method: 'POST',
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
            <h1 className='add-supplier-h1'>Add supplier</h1>
            <form className='form' onSubmit={(e) => add(e)}>
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

export default Add