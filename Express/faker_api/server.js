const express = require('express')
const app = express()
const PORT = 8000

const { faker } = require('@faker-js/faker')
const { Company } = require('@faker-js/faker/modules/company')

app.listen(PORT, ()=> {
    console.log (`Server is up and running on port ${PORT}`)
})

const createUser = () => {
    return {
        _id:faker.datatype.uuid(),
        first_name:faker.name.firstName(),
        last_name:faker.name.lastName(),
        email:faker.internet.email(),
        password:faker.internet.password(),
        phone_number:faker.phone.number(),
    }
}

const createCompany = () => {
    return {
        _id:faker.datatype.uuid(),
        name:faker.name.fullName(),
        address:{
            street:faker.address.street(),
            city:faker.address.city(),
            state:faker.address.state(),
            zip:faker.address.zipCode(),
            country:faker.address.country
        }
    }
}

app.get('/api/users/new',(req,res)=>{
    const user = createUser()
    res.json(user)
})

app.get('/api/companies/new',(req,res)=>{
    const company = createCompany()
    res.json(company)
})