// import { useState } from "react";
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
//     from "/../../components/ui/card";

// import { Button } from "/././components/ui/button";
// // import AppModal from "../../components/AppModal";
import { useState, useEffect } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,

} from "../../components/ui/card";

import { Button } from "../../components/ui/button";

import AppModal from "../../components/AppModal";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import api from "@/services/api.js"

// import { title } from "node:process";

// const dataUser = [
//     {
//         id: 1,
//         name: "Daffa",
//         email: "daffa@gmail.com",
//         password: "1234"
//     },
//     {
//         id: 2,
//         name: "wowo",
//         email: "wowo@gmail.com",
//         password: "1234"
//     },
//     {
//         id: 2,
//         name: "wiwi",
//         email: "wiwi@gmail.com",
//         password: "1234"
//     },
//     {
//         id: 3,
//         name: "wuwu",
//         email: "wuwu@gmail.com",
//         password: "1234"
//     },
// ]
const ListTransaction = () => {
    const _initForm = {

        name: "",
        email: "",
        password: "",
        is_active: "1",

    }


    const [showModal, setShowModal] = useState(false)
    const [transactions, setTransactions] = useState([])
    const [formData, setFormData] = useState(_initForm)
    const [isEdit, setEdit] = useState(false)
    const fetchTransaction = async () => {
        try {
            const response = await api.get("/transaction")

            setTransactions(response.data)
        } catch (error) {
            console.log(error.message)
        }

    }

    useEffect(() => {
        fetchTransaction();
    }, [])


    // const [isDelete, setDelete] = useState(false)

    const handleOpenModal = () => {
        setShowModal(true)
        setFormData(_initForm)
        setEdit(false)
    }
    const handleEditModal = (user) => {
        setShowModal(true)
        setEdit(true)
        setFormData(user)
    }




    const handleCloseModal = () => {
        setShowModal(false)
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });


    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                is_active: parseInt(formData.is_active)
            }
            if (isEdit) {
                await api.put(`/user/${formData.id}`, payload)

                // setTransactions(transactions.map((user) => (user.id === formData.id ? formData : user)))
            } else {
                await api.post("/user", payload)
                // const newUser = {
                //     ...formData,
                //     id: Date.now(),
                // }
                // setTransactions([...transactions, newUser])
            }
            setFormData(_initForm)
        } catch (error) {
            const errMsg = error.message;
            console.log(errMsg)
        } finally {
            fetchTransaction()
            setShowModal(false)
        }

        //jika edit data

        // disinii
        // const newUser = {
        //     ...formData,
        //     id: Date.now(),
        // };
        setTransactions([...transactions, formData])
        setShowModal(false)
    }

    const handleDelete = async (id) => {
        const confirmation = window.confirm("are you sure want to delete data")
        if (confirmation) {

            await api.delete(`/user/${id}`)
            fetchTransaction()
            // setTransactions(transactions.filter((u) => u.id !== id))
        }
        // filter transactions
        // setTransactions(transactions.filter((u) => u.id !== id))
    }
    return (

        <>
            <Card className="shadow-sm border-border p-6">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                    <div>
                        <CardTitle className="text-xl font-bold">Data Transaction</CardTitle>
                    </div>
                    <Button onClick={handleOpenModal}>
                        Transaction
                    </Button>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                    </div>
                    <h4 className="mb-0 fw-bold">Data Transactions</h4>
                    <div align="right">
                    </div>


                    <table className="w-full text-left text-sm">
                        <thead className="border-y bg-muted/30 text-xs uppercase text-muted-foreground">
                            <tr>
                                <th className="px-6 py-3 font-medium">#</th>
                                <th className="px-6 py-3 font-medium" >Order Number</th>
                                <th className="px-6 py-3 font-medium">Payment Method</th>
                                <th className="px-6 py-3 font-medium">Production</th>
                                <th className="px-6 py-3 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {transactions.map((user, index) => (
                                <tr key={index} className="hover:bg-muted/50 transition-colors ">
                                    <td className="px-4 py-6 whitespace-nowrap">{index + 1}</td>
                                    <td>{user.orders_number}</td>
                                    <td>{user.payment_method === 1 ? "Gopay" : "Cash"}</td>
                                    <td>
                                    {user.items.map((item) => (
                                        <ul>
                                            <li>{item.name}</li>
                                        </ul>
                                    ))}
                                        </td>
                                    <td>
                                        <span className={`px-3 py-1 text-sm font-semibold rounded-xl border ${user.is_active === 1 ? "border-emerald-500 text-emerald-600" : "border-rose-500 text-rose-600"}`}>
                                            {user.is_active === 1 ? "Active" : "Inactive"}
                                        </span>
                                    </td>
                                    <td className="px-4 py-6 text-right whitespace-nowrap">
                                        <Button onClick={() => handleEditModal(user)} variant="warning" size="sm" className="me-2 bg-blue-200">Edit</Button>
                                        <Button onClick={() => handleDelete(user.id)} variant="destructive" size="sm" className="me-2">Delete</Button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </CardContent>
            </Card>



            <AppModal show={showModal} onClose={handleCloseModal} title={isEdit ? "Edit User" : "Create New User"} onSubmit={handleSubmit} submitLabel={isEdit ? "Save Change" : "Save"}>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label>Name</Label>
                        <Input id="name"
                            name="name"
                            value={formData.name} onChange={handleChange} required
                            placeholder="Enter your name"></Input>
                    </div>
                    <div className="space-y-2">
                        <Label>Email</Label>
                        <Input type="email" id="email" name="email"
                            value={formData.email} onChange={handleChange} required
                            placeholder="Enter your email"></Input>
                    </div>
                    <div className="space-y-2">
                        <Label>Password</Label>
                        <Input type="password"
                            name="password"
                            value={formData.password} onChange={handleChange} required={isEdit ? false : true}
                            placeholder="Enter your password"></Input>
                    </div>
                </div>

                {/* <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name"
                        placeholder="enter your name"
                        required
                        value={formData.name} onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>email</Form.Label>
                    <Form.Control value={formData.email} onChange={handleChange} type="email" name="email"
                        placeholder="enter your email" required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>password</Form.Label>
                    <Form.Control value={formData.password} onChange={handleChange} type="password" name="password"
                        placeholder="enter your password" required></Form.Control>
                </Form.Group> */}

            </AppModal>
        </>
    )
}

export default ListTransaction 